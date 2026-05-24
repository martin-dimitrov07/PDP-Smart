import { Component, inject } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { ModalAddStudente } from './modal-add-studente/modal-add-studente';
import { DocumentiService } from '../../../../shared/services/documenti.service';
import { CheckError } from '../../../../shared/utilities/check-error';
import { StepsService } from '../../../../shared/services/steps.service';
import { Studente } from '../../../../models/studente';
import { MaterieService } from '../../../../shared/services/materie.service';
import { StudentiService } from '../../../../shared/services/studenti.service';

@Component({
    selector: 'app-form-studenti',
    imports: [FormsModule, CommonModule, ModalAddStudente],
    templateUrl: './form-studenti.html',
    styleUrl: './form-studenti.css',
})

export class FormStudenti {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    public readonly studentiService: StudentiService = inject(StudentiService);
    public readonly materieService: MaterieService = inject(MaterieService);
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
        this.studentiService.studenteSelected = studente;

        this.materieService.GetMaterieClasse().subscribe({
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
        this.studentiService.studenteSelected = {} as Studente;
        this.documentiService.ResetCreateDocumento();
        this.resetComponent();
    }
}
