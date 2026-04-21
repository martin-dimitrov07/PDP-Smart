import { Component, ElementRef, EventEmitter, inject, Output, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { Studente } from '../../../../../models/studente';
import { ModalAddStudente } from './modal-add-studente/modal-add-studente';
import { Router } from '@angular/router';
import { DocumentiService } from '../../../../../shared/services/documenti.service';
import { CheckError } from '../../../../../shared/utilities/check-error';
@Component({
    selector: 'app-form-studenti',
    imports: [FormsModule, CommonModule, ModalAddStudente],
    templateUrl: './form-studenti.html',
    styleUrl: './form-studenti.css',
})
export class FormStudenti {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    private readonly checkError: CheckError = inject(CheckError);
    private readonly router: Router = inject(Router);

    ngOnInit() {
        this.documentiService.tappa = "studenti";
        this.documentiService.avanzamentoCrea = "studenti";
    }

    SaveStudente(studente: Studente){
        this.documentiService.studenteSelected = studente;
    }

    RemoveStudente() {
        this.documentiService.studenteSelected = {} as Studente;
    }

    GoStep() {
        this.documentiService.tappa = "materie";
        this.documentiService.avanzamentoCrea = "materie";

        this.router.navigate(["documenti", "crea", "materie"]);
    }
}
