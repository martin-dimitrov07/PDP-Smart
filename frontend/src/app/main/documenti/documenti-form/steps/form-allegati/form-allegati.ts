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
    // public readonly documentiService: DocumentiService = inject(DocumentiService);
    public readonly stepsService: StepsService = inject(StepsService);

    allegati: File[] = [];

    ngOnInit() {
        this.stepsService.step = "allegati";
    }

    onSelect(event: any) {
        console.log(event);
        // Aggiunge i nuovi file a quelli esistenti (o sostituisci se ne vuoi solo uno)
        this.allegati.push(...event.addedFiles);
    }

    onRemove(event: any) {
        // Rimuove il file dall'array
        this.allegati.splice(this.allegati.indexOf(event), 1);
    }
}
