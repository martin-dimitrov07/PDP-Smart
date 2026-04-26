import { Component, inject } from '@angular/core';
import { DocumentiService } from '../../../../../shared/services/documenti.service';
import { StepsService } from '../../../../../shared/services/steps.service';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-form-allegati',
    imports: [NgxDropzoneModule, CommonModule],
    templateUrl: './form-allegati.html',
    styleUrl: './form-allegati.css',
})
export class FormAllegati {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    public readonly stepsService: StepsService = inject(StepsService);

    ngOnInit() {
        this.stepsService.step = "allegati";
    }

    OnSelect(event: any) {
        console.log(event);
        // Aggiunge i nuovi file a quelli esistenti
        this.documentiService.allegati.push(...event.addedFiles);

        // TODO: mostrare modal di errore (dimensione, formato)
    }

    OnRemove(event: any) {
        // Rimuove il file dall'array
        this.documentiService.allegati.splice(this.documentiService.allegati.indexOf(event), 1);
    }

    CreateDocumento(){
        this.documentiService.CreateDocumento();
    }
}
