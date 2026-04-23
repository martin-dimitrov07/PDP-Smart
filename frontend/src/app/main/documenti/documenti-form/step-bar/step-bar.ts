import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentiService } from '../../../../shared/services/documenti.service';
import { StepsService } from '../../../../shared/services/steps.service';

@Component({
    selector: 'app-step-bar',
    imports: [],
    templateUrl: './step-bar.html',
    styleUrl: './step-bar.css',
})
export class StepBar {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    public readonly stepsService: StepsService = inject(StepsService);

    steps = ['studenti', 'materie', 'indicatori', 'ICF', 'allegati'];

    // Crea una funzione di supporto per verificare lo stato
    isStepActive(stepName: string): boolean {
        const currentStep = this.steps.indexOf(this.stepsService.step);
        const step = this.steps.indexOf(stepName);
        // È attivo se il passo attuale è uguale o successivo a questo
        return currentStep >= step;
    }

    GoPage(page: string) {
        if (document.querySelector(`.${page}`)?.classList.contains('active')) {
            this.stepsService.GoStep(page);
        }
    }
}
