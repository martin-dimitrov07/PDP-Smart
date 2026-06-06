import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CommonModule } from '@angular/common';
import { ModalError } from './modal-error/modal-error';
import { Router } from '@angular/router';
import { DocumentiService } from '../../../../shared/services/documenti.service';
import { StepsService } from '../../../../shared/services/steps.service';
import { Docente, Ruolo } from '../../../../models/docente';
import { DocentiService } from '../../../../shared/services/docenti.service';
import { ActivatedRoute } from '@angular/router';
import { DocumentiEditBreadcrumb } from '../../documenti-edit/documenti-edit-breadcrumb/documenti-edit-breadcrumb';
import { CheckError } from '../../../../shared/utilities/check-error';
import { Allegato } from '../../../../models/allegato';
import { Stato } from '../../../../models/documento';
import { catchError, map, Observable, of, switchMap, tap } from 'rxjs';
import { StudentiService } from '../../../../shared/services/studenti.service';
import { ClassiService } from '../../../../shared/services/classi.service';
import { AllegatiService } from '../../../../shared/services/allegati.service';
import { IcfService } from '../../../../shared/services/icf.service';
import { Classe } from '../../../../models/classe';


@Component({
    selector: 'app-form-allegati',
    imports: [NgxDropzoneModule, CommonModule, ModalError, DocumentiEditBreadcrumb],
    templateUrl: './form-allegati.html',
    styleUrl: './form-allegati.css',
})
export class FormAllegati {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    private readonly classiService: ClassiService = inject(ClassiService);
    public readonly docenteService: DocentiService = inject(DocentiService);
    public readonly stepsService: StepsService = inject(StepsService);
    public readonly allegatiService: AllegatiService = inject(AllegatiService);
    private readonly icfsService: IcfService = inject(IcfService);
    public readonly docentiService: DocentiService = inject(DocentiService);
    private readonly checkError: CheckError = inject(CheckError);


    private readonly router: Router = inject(Router);
    public activatedRoute: ActivatedRoute = inject(ActivatedRoute);

    Ruolo: typeof Ruolo = Ruolo;
    StatoDocumento: typeof Stato = Stato;

    canEdit: boolean = false;

    @ViewChild('btnTrigger') btnTrigger!: ElementRef;

    public isLoading: boolean = false;

    ngOnInit() {
        this.stepsService.step = "allegati";
        if (this.activatedRoute.snapshot.data['root'] == 'modifica') {
            this.isLoading = true;
            this.allegatiService.allegatiEdit = [];
            this.allegatiService.allegatiDoc = [];
            this.allegatiService.allegati = [];
            this.allegatiService.GetAllegatiDocumento()?.subscribe({
                next: (data: any) => {
                    console.log("Allegati del documento:", this.allegatiService.allegatiDoc);
                    this.isLoading = false;
                },
                error: (err: any) => {
                    this.checkError.checkError(err)
                    this.isLoading = false;
                }
            });
        }
        this.CanEdit();
    }

    OnSelect(event: any) {
        console.log(event);
        // Aggiunge i nuovi file a quelli esistenti
        this.allegatiService.allegati.push(...event.addedFiles.map((file: File) => new Allegato(0, file)));

        if (event.rejectedFiles.length > 0) {
            switch (event.rejectedFiles[0].reason) {
                case "type":
                    this.allegatiService.errorAllegati = "Il file " + event.rejectedFiles[0].name + " non è in un formato supportato (immagini o PDF o documenti Word).";
                    break;
                case "size":
                    this.allegatiService.errorAllegati = "Il file " + event.rejectedFiles[0].name + " supera la dimensione massima consentita (5MB).";
                    break;
                default:
                    this.allegatiService.errorAllegati = "Il file " + event.rejectedFiles[0].name + " non è stato accettato (errore sconosciuto).";
            }

            console.log(this.allegatiService.errorAllegati);

            this.btnTrigger.nativeElement.click();

            console.log(this.allegatiService.errorAllegati);
        }
    }

    RemoveNewAllegato(allegato: Allegato) {
        // Rimuove il file dall'array
        this.allegatiService.allegati.splice(this.allegatiService.allegati.findIndex((f) => f === allegato), 1);
    }

    PrepareDocumento() {
        if (this.icfsService.newIcfs.length > 0) {
            this.icfsService.CreateICFs(this.icfsService.newIcfs)?.subscribe({
                next: (data: any) => {
                    this.CreateDocumento();
                },
                error: (err: any) => this.checkError.checkError(err)
            });
        }
        else {
            this.CreateDocumento();
        }
    }

    CreateDocumento() {
        this.documentiService.CreateDocumento()?.subscribe({
            next: (response) => {
                console.log("Documento creato con successo:", response);
                this.documentiService.ResetCreateDocumento();
                this.router.navigate(['documenti']);

                //mostrare toast messaggio successo
            },
            error: (error) => this.checkError.checkError(error)
        });
    }

    Edit() {
        for (const allegato of this.allegatiService.allegati) {
            this.allegatiService.allegatiEdit.push({ Allegato: allegato, Value: true });
        }

        if (this.allegatiService.allegatiEdit.length > 0) {
            this.allegatiService.UpdateAllegatiDocumento()?.subscribe({
                next: (data: any) => {
                    console.log("Allegati modificati con successo");
                },
                error: (err: any) => this.checkError.checkError(err)
            });
        }

        this.router.navigate(["../"], { relativeTo: this.activatedRoute });
    }

    RemoveAllegato(allegato: Allegato) {
        const indexAllegato = this.allegatiService.allegatiDoc.indexOf(allegato);
        this.allegatiService.allegatiDoc.splice(indexAllegato, 1);
        this.allegatiService.allegatiEdit.push({ Allegato: allegato, Value: false });
    }

    ShowAllegato(allegato: Allegato) {
        const fileUrl = URL.createObjectURL(allegato.File);

        const link = document.createElement('a');
        link.href = fileUrl;
        link.target = '_blank';
        link.click();
        //Pulizia: rimuove l'URL creato per liberare memoria
        window.URL.revokeObjectURL(fileUrl);
    }


    CanEdit() {
        const docente = this.docentiService.docente;

        if (docente?.Ruolo == this.Ruolo.ADMIN) {
            this.canEdit = true;
            return;
        }

        if (docente?.Ruolo == this.Ruolo.DOCENTE) {
            this.canEdit = false;
            return;
        }

        if (!this.documentiService.documentoSelected) {
            this.canEdit = false;
            return;
        }

        this.classiService.GetClasseByDocumento(this.documentiService.documentoSelected).subscribe({
            next: (classe: Classe | null) => {
                if (!classe) return;
                this.canEdit = classe.Coordinatore_Email == docente?.Email;
            },
            error: (err: any) => this.checkError.checkError(err)
        });
    }
}
