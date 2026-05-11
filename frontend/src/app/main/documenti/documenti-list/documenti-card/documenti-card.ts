import { Component, inject, Input, PLATFORM_ID } from '@angular/core';
import { Documento, Tipo, Stato } from '../../../../models/documento';
import { NgClass } from '@angular/common';
import { DocentiService } from '../../../../shared/services/docenti.service';
import { Ruolo } from '../../../../models/docente';
import { Router } from '@angular/router';
import { DocumentiService } from '../../../../shared/services/documenti.service';
import { catchError, lastValueFrom, map, Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CheckError } from '../../../../shared/utilities/check-error';
import { StudentiService } from '../../../../shared/services/studenti.service';
import { Studente } from '../../../../models/studente';
import { Classe } from '../../../../models/classe';

import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-documenti-card',
    imports: [NgClass, AsyncPipe],
    templateUrl: './documenti-card.html',
    styleUrl: './documenti-card.css',
})
export class DocumentiCard {
    public readonly docenteService: DocentiService = inject(DocentiService);
    private readonly documentiService: DocumentiService = inject(DocumentiService);
    private readonly studentiService: StudentiService = inject(StudentiService);
    private readonly checkError: CheckError = inject(CheckError);
    private _documento!: Documento;
    private readonly router: Router = inject(Router);

    // Enum per template
    public readonly StatoDocumento = Stato;
    public readonly TipoDocumento = Tipo;
    public readonly RuoloDocente = Ruolo;

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
        this.router.navigate(["/documenti/modifica", this.documento.Studente_Email.replaceAll('.', '_'), this.documento.Anno?.getFullYear() + "-" + (this.documento.Anno!.getFullYear() + 1)]);
    }

    DeleteDocument() {
        if (confirm("Sei sicuro di voler eliminare questo documento?")) {
            this.documentiService.DeleteDocumento(this.documento);
        }
    }

    canDelete: Observable<boolean> = of(false);

    CanDelete() {
        const docente = this.docenteService.docente;

        if (docente.Ruolo == this.RuoloDocente.ADMIN) {
            this.canDelete = of(true);
            return;
        }

        if (docente.Ruolo == this.RuoloDocente.DOCENTE) {
            this.canDelete = of(false);
            return;
        }

        this.canDelete = this.studentiService.GetClasseByDocumento(this.documento).pipe(
            map(classe => {
                if (!classe) return false;
                return this.classiCoordinateIds.includes(classe.Id);
            }),
            catchError(err => {
                this.checkError.checkError(err);
                return of(false);
            })
        );
    }

    private readonly platformId = inject(PLATFORM_ID);
    private readonly http: HttpClient = inject(HttpClient);

    async ShowDocumento() {
        try {
            const pathModel = this.documento.Tipologia == this.TipoDocumento.DSA ? '/MODELLO_PDP_DSA.docx' : '/MODELLO_PDP_BES.docx';

            const content = await lastValueFrom(
                this.http.get(pathModel, { responseType: 'arraybuffer' })
            );

            // Caricamento template .docx con PizZip e Docxtemplater
            const zip = new PizZip(content);
            const doc = new Docxtemplater(zip, {
                paragraphLoop: true, // permette di iterare sui paragrafi del template
                linebreaks: true  // Mantiene i ritorni a capo del template
            });

            const data = await this.GetDocumentoData();

            if (!data) {
                throw new Error("Dati del documento non disponibili");
            }

            // Compilazione del template con i dati ottenuti
            doc.setData(data);
            doc.render();

            // Generazione del file .docx e download
            if (isPlatformBrowser(this.platformId)) { // Verifica che il codice venga eseguito solo in ambiente browser
                const out = doc.getZip().generate({
                    type: "blob",
                    mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                });

                const fileUrl = window.URL.createObjectURL(out);
                const link = document.createElement('a');
                link.href = fileUrl;
                link.download = "PDP_" + data.nome_studente.replaceAll(' ', '_') + "_" + data.anno.replaceAll('/', '-') + ".docx";
                link.click();

                setTimeout(() => window.URL.revokeObjectURL(fileUrl), 100); // Pulizia dell'URL dopo il download
            }
        } catch (error) {
            console.error("Errore durante la generazione del documento:", error);
        }
    }

    async GetDocumentoData() {
        let result: any = {
            anno: this.documento.Anno?.getFullYear() + "/" + (this.documento.Anno!.getFullYear() + 1),
            data_approvazione: this.documento.Data_Approvazione ? new Date(this.documento.Data_Approvazione).toLocaleDateString() : "N/A"
        }

        this.documentiService.documentoSelected = this.documento;

        try {
            const studente: Studente = await lastValueFrom(this.studentiService.GetStudenteByEmail(this.documento.Studente_Email));
            result.nome_studente = studente.Nome + " " + studente.Cognome;

            const classe: Classe | null = await lastValueFrom(this.studentiService.GetClasseByDocumento(this.documento));

            if (!classe) {
                throw new Error("Classe non trovata per il documento dello studente " + result.nome_studente);
            }

            this.documentiService.classeSelected = classe;
            result.nome_classe = classe.GetFullNome();

            await lastValueFrom(this.documentiService.GetCategorieIndicatore());
            await lastValueFrom(this.documentiService.GetMaterieClasse());
            await lastValueFrom(this.documentiService.GetIndicatoriDocumento());

            for (let i = 1; i <= 4; i++) {
                result["c" + i] = this.documentiService.categorieInd[i - 1] || "";

                const indicatori = await lastValueFrom(this.documentiService.GetIndicatori(result["c" + i], this.documento.Tipologia));

                for (let j = 0; j < 13; j++) {
                    result["m" + String.fromCodePoint(65 + j) + "_c" + i] = this.documentiService.materieClasse[j] || "";
                }

                for (let k = 0; k < 15; k++) {
                    result["d" + String.fromCodePoint(65 + k) + "_c" + i] = indicatori[k] ? indicatori[k].Descrizione : "";

                    for (let l = 0; l < 13; l++) {
                        if (indicatori[k]) {
                            result["i" + String.fromCharCode(65 + l) + String.fromCharCode(65 + k) + i] = this.documentiService.indicatoriDoc.find((ind: any) => ind.Materia == result["m" + String.fromCodePoint(65 + l) + "_c" + i] && ind.Id == indicatori[k].Id) ? "X" : "";
                        }
                        else
                            result["i" + String.fromCharCode(65 + l) + String.fromCharCode(65 + k) + i] = "";
                    }
                }

                result["c" + i] = result["c" + i].replaceAll("_", " ");
            }

            return result;
        }
        catch (err) {
            console.error("Errore durante l'ottenimento dei dati per il documento:", err);
        }
    }
}
