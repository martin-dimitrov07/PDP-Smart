import { Component, ElementRef, EventEmitter, inject, Input, Output, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { Studente } from '../../../../../models/studente';
import { ModalAddStudente } from './modal-add-studente/modal-add-studente';
import { DocumentiService } from '../../../../../shared/services/documenti.service';
import { StepsService } from '../../../../../shared/services/steps.service';

@Component({
    selector: 'app-form-studenti',
    imports: [FormsModule, CommonModule, ModalAddStudente],
    templateUrl: './form-studenti.html',
    styleUrl: './form-studenti.css',
})

export class FormStudenti {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    public readonly stepsService: StepsService = inject(StepsService);

    ngOnInit() {
        this.stepsService.step = "studenti";
    }

    SaveStudente(studente: Studente) {
        this.documentiService.studenteSelected = studente;
    }

    RemoveStudente() {
        this.documentiService.studenteSelected = {} as Studente;
    }
}
