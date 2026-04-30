import { Component, inject } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { Studente } from '../../../../../models/studente';
import { ModalAddStudente } from './modal-add-studente/modal-add-studente';
import { DocumentiService } from '../../../../../shared/services/documenti.service';
import { StepsService } from '../../../../../shared/services/steps.service';
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
    public readonly stepsService: StepsService = inject(StepsService);

    resetSignal: boolean = true;

    resetComponent() {
        this.resetSignal = false;
        setTimeout(() => this.resetSignal = true, 0);
        return this.resetSignal;
    }

    ngOnInit() {
        this.stepsService.step = "studenti";
    }

    SaveStudente(studente: Studente) {
        this.documentiService.studenteSelected = studente;

        this.documentiService.GetMaterieClasse().subscribe({
            next: (data) => {
                this.documentiService.GetCategorieIndicatore().subscribe({
                    next: (data) => {
                        this.documentiService.InitializeIndicatori();
                    },
                    error: (err) => this.checkError.checkError(err)
                });
            },
            error: (err) => this.checkError.checkError(err)
        })
    }

    RemoveStudente() {
        this.documentiService.studenteSelected = {} as Studente;
        this.documentiService.ResetCreateDocumento();
        this.resetComponent();
    }
}
