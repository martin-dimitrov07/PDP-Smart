import { Component, EventEmitter, inject, Output } from '@angular/core';
import { DocumentiService } from '../../../../../shared/services/documenti.service';
import { CheckError } from '../../../../../shared/utilities/check-error';
import { Router } from '@angular/router';
import { ModalAddMateria } from './modal-add-materia/modal-add-materia';
import { StepsService } from '../../../../../shared/services/steps.service';

@Component({
    selector: 'app-form-materie',
    imports: [ModalAddMateria],
    templateUrl: './form-materie.html',
    styleUrl: './form-materie.css',
})
export class FormMaterie {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    public readonly stepsService: StepsService = inject(StepsService);

    ngOnInit() {
        this.stepsService.step = "materie";
    }

    SaveMateria(nome: string) {
        if (this.documentiService.materieSelected.findIndex(materia => materia == nome) == -1) {
            this.documentiService.materieSelected.push(nome);
        }
    }

    RemoveMateria(nome: string) {
        this.documentiService.materieSelected.splice(this.documentiService.materieSelected.findIndex(materia => materia == nome), 1);
        this.documentiService.indicatori[nome] = {};
    }
}
