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

    public readonly docentiService: DocentiService = inject(DocentiService);
    Ruolo: typeof Ruolo = Ruolo;

    private readonly router: Router = inject(Router);

    @ViewChild('btnTrigger') btnTrigger!: ElementRef;

    ngOnInit() {
        this.stepsService.step = "allegati";
    }

    OnSelect(event: any) {
        console.log(event);
        // Aggiunge i nuovi file a quelli esistenti
        this.documentiService.allegati.push(...event.addedFiles);

        if(event.rejectedFiles.length > 0) 
        {
            switch(event.rejectedFiles[0].reason) {
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

    OnRemove(event: any) {
        // Rimuove il file dall'array
        this.documentiService.allegati.splice(this.documentiService.allegati.indexOf(event), 1);
    }

    CreateDocumento(){
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
}
