import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CommonModule } from '@angular/common';
import { ModalError } from './modal-error/modal-error';
import { Router } from '@angular/router';
import { DocumentiService } from '../../../../shared/services/documenti.service';
import { StepsService } from '../../../../shared/services/steps.service';
import { Ruolo } from '../../../../models/docente';
import { DocentiService } from '../../../../shared/services/docenti.service';
import { ActivatedRoute } from '@angular/router';
import { DocumentiEditBreadcrumb } from '../../documenti-edit/documenti-edit-breadcrumb/documenti-edit-breadcrumb';
import { CheckError } from '../../../../shared/utilities/check-error';
import { Allegato } from '../../../../models/allegato';
import { Stato } from '../../../../models/documento';


@Component({
    selector: 'app-form-allegati',
    imports: [NgxDropzoneModule, CommonModule, ModalError, DocumentiEditBreadcrumb],
    templateUrl: './form-allegati.html',
    styleUrl: './form-allegati.css',
})
export class FormAllegati {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    public readonly stepsService: StepsService = inject(StepsService);
    public activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    private readonly checkError: CheckError = inject(CheckError);

    public readonly docentiService: DocentiService = inject(DocentiService);
    Ruolo: typeof Ruolo = Ruolo;
    StatoDocumento: typeof Stato = Stato;


    private readonly router: Router = inject(Router);

    @ViewChild('btnTrigger') btnTrigger!: ElementRef;

    ngOnInit() {
        this.stepsService.step = "allegati";
        // console.log(this.documentiService.documentoSelected)
        // console.log("Allegati Doc: ", this.documentiService.allegatiDoc);
        if (this.activatedRoute.snapshot.data['root'] == 'modifica') {
            this.documentiService.allegatiEdit = [];
            this.documentiService.allegatiDoc = [];
            this.documentiService.GetAllegatiDocumento()?.subscribe({
                next: (data: any) => {
                    console.log("Allegati del documento:", this.documentiService.allegatiDoc);
                },
                error: (err: any) => this.checkError.checkError(err)
            });
        }
        this.documentiService.allegati = [];
    }

    OnSelect(event: any) {
        console.log(event);
        // Aggiunge i nuovi file a quelli esistenti
        this.documentiService.allegati.push(...event.addedFiles.map((file: File) => new Allegato(0, file)));

        if (event.rejectedFiles.length > 0) {
            switch (event.rejectedFiles[0].reason) {
                case "type":
                    this.documentiService.errorAllegati = "Il file " + event.rejectedFiles[0].name + " non è in un formato supportato (immagini o PDF o documenti Word).";
                    break;
                case "size":
                    this.documentiService.errorAllegati = "Il file " + event.rejectedFiles[0].name + " supera la dimensione massima consentita (5MB).";
                    break;
                default:
                    this.documentiService.errorAllegati = "Il file " + event.rejectedFiles[0].name + " non è stato accettato (errore sconosciuto).";
            }

            console.log(this.documentiService.errorAllegati);

            this.btnTrigger.nativeElement.click();

            console.log(this.documentiService.errorAllegati);
        }
    }

    RemoveNewAllegato(allegato: Allegato) {
        // Rimuove il file dall'array
        this.documentiService.allegati.splice(this.documentiService.allegati.findIndex((f) => f === allegato), 1);
    }

    CreateDocumento() {
        this.documentiService.CreateDocumento().subscribe({
            next: (response) => {
                console.log("Documento creato con successo:", response);
                this.documentiService.ResetCreateDocumento();
                this.router.navigate(['documenti']);

                //mostrare toast messaggio successo
            },
            error: (error) => {
                console.error("Errore durante la creazione del documento:", error);

                //mostrare toast messaggio errore
            }
        });
    }

    Edit() {
        for (const allegato of this.documentiService.allegati) {
            this.documentiService.allegatiEdit.push({ Allegato: allegato, Value: true });
        }

        if (this.documentiService.allegatiEdit.length > 0) {
            this.documentiService.UpdateAllegatiDocumento()?.subscribe({
                next: (data: any) => {
                    console.log("Allegati modificati con successo");
                },
                error: (err: any) => this.checkError.checkError(err)
            });
        }

        this.router.navigate(["../"], { relativeTo: this.activatedRoute });
    }

    RemoveAllegato(allegato: Allegato) {
        const indexAllegato = this.documentiService.allegatiDoc.indexOf(allegato);
        this.documentiService.allegatiDoc.splice(indexAllegato, 1);
        this.documentiService.allegatiEdit.push({ Allegato: allegato, Value: false });
    }

    ShowAllegato(allegato: Allegato) {
        const fileUrl = URL.createObjectURL(allegato.File);

        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = allegato.File.name;
        link.click();
        //Pulizia: rimuove l'URL creato per liberare memoria
        window.URL.revokeObjectURL(fileUrl);
    }
}
