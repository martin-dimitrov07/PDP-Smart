import { Component, inject, Input, PLATFORM_ID } from '@angular/core';
import { Documento, Tipo, Stato } from '../../../../models/documento';
import { DocentiService } from '../../../../shared/services/docenti.service';
import { Ruolo } from '../../../../models/docente';
import { Router } from '@angular/router';
import { DocumentiService } from '../../../../shared/services/documenti.service';
import { lastValueFrom } from 'rxjs';
import { CheckError } from '../../../../shared/utilities/check-error';
import { StudentiService } from '../../../../shared/services/studenti.service';
import { Classe } from '../../../../models/classe';
import { isPlatformBrowser } from '@angular/common';
import { Studente } from '../../../../models/studente';
import { ClassiService } from '../../../../shared/services/classi.service';

@Component({
    selector: 'app-documenti-card',
    imports: [],
    templateUrl: './documenti-card.html',
    styleUrl: './documenti-card.css',
})
export class DocumentiCard {
    public readonly docentiService: DocentiService = inject(DocentiService);
    private readonly documentiService: DocumentiService = inject(DocumentiService);
    private readonly classiService: ClassiService = inject(ClassiService);
    private readonly studentiService: StudentiService = inject(StudentiService);
    private readonly checkError: CheckError = inject(CheckError);
    private _documento!: Documento;
    private readonly router: Router = inject(Router);

    canDelete: boolean = false;

    // Enum per template
    StatoDocumento: typeof Stato = Stato;
    TipoDocumento: typeof Tipo = Tipo;
    RuoloDocente: typeof Ruolo = Ruolo;

    @Input() classiCoordinateIds: number[] = [];
    @Input() set documento(valore: any) {
        //appena arriva il dato dal padre, lo trasformiamo in un'istanza di Classe
        this._documento = new Documento(
            valore.Studente_Email,
            valore.Tipologia,
            valore.Anno,
            valore.Data_Approvazione
        );
    }

    get documento(): Documento {
        return this._documento;
    }

    ngOnChanges() {
        this.CanDelete();
    }

    GoEdit() {
        // console.log("Navigazione a modifica documento:", this.documento);
        this.documentiService.documentoSelected = this.documento;
        this.router.navigate(["/documenti/modifica", this.documento.Studente_Email.replaceAll('.', '_'), this.documento.Anno?.getFullYear() + "-" + (this.documento.Anno!.getFullYear() + 1)]);
    }

    DeleteDocument() {
        if (confirm("Sei sicuro di voler eliminare questo documento?")) {
            this.documentiService.DeleteDocumento(this.documento);
        }
    }

    CanDelete() {
        const docente = this.docentiService.docente;

        if (docente.Ruolo == this.RuoloDocente.ADMIN) {
            this.canDelete = true;
            return;
        }

        if (docente.Ruolo == this.RuoloDocente.DOCENTE) {
            this.canDelete = false;
            return;
        }

        this.classiService.GetClasseByDocumento(this.documento).subscribe({
            next: (classe: Classe | null) => {
                if (!classe) return;
                this.canDelete = classe.Coordinatore_Email == docente.Email;
            },
            error: (err: any) => this.checkError.checkError(err)
        });
    }

    private readonly platformId = inject(PLATFORM_ID);

    async ShowDocumento() {
        if (this.documento.Stato == this.StatoDocumento.IN_BOZZA) {
            if (isPlatformBrowser(this.platformId)) { // Verifica che il codice venga eseguito solo in ambiente browser
                const data = await this.documentiService.GetFileDocumentoData(this.documento);

                if (!data) {
                    console.error("Errore nel recupero dei dati del documento.");
                    return;
                }

                const fileDocx = await this.documentiService.CreateFileDocumento(this.documento, data);

                if (!fileDocx) {
                    console.error("Errore nella creazione del file documento.");
                    return;
                }

                const fileUrl = window.URL.createObjectURL(fileDocx);
                const link = document.createElement('a');
                link.href = fileUrl;
                link.download = "PDP_" + data.nome_studente.replaceAll(' ', '_') + "_" + data.anno.replaceAll('/', '-') + ".docx";
                link.click();

                setTimeout(() => window.URL.revokeObjectURL(fileUrl), 100); // Pulizia dell'URL dopo il download
            }
        }
        else {
            this.documentiService.GetFileDocumentoApprovato(this.documento).subscribe({
                next: async (fileData: Blob) => {
                    const studente: Studente = await lastValueFrom(this.studentiService.GetStudenteByEmail(this.documento.Studente_Email, this.documento.Anno!));

                    const fileUrl = window.URL.createObjectURL(fileData);
                    const link = document.createElement('a');
                    link.href = fileUrl;
                    link.download = "PDP_" + studente.Cognome.replaceAll(' ', '_') + "_" + studente.Nome.replaceAll(' ', '_') + "_" + this.documento.Anno?.getFullYear() + "-" + (this.documento.Anno!.getFullYear() + 1) + ".pdf";
                    link.click(); 

                    setTimeout(() => window.URL.revokeObjectURL(fileUrl), 100); // Pulizia dell'URL dopo il download
                },
                error: (err: any) => this.checkError.checkError(err)
            });
        }
    }
}
