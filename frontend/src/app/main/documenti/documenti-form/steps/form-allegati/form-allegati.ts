import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { DocumentiService } from '../../../../../shared/services/documenti.service';
import { StepsService } from '../../../../../shared/services/steps.service';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CommonModule } from '@angular/common';
import { ModalError } from './modal-error/modal-error';
import { Router } from '@angular/router';

@Component({
    selector: 'app-form-allegati',
    imports: [NgxDropzoneModule, CommonModule, ModalError],
    templateUrl: './form-allegati.html',
    styleUrl: './form-allegati.css',
})
export class FormAllegati {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    public readonly stepsService: StepsService = inject(StepsService);

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
