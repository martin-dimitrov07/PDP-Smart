import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentiService } from '../../../../shared/services/documenti.service';

@Component({
    selector: 'app-step-bar',
    imports: [],
    templateUrl: './step-bar.html',
    styleUrl: './step-bar.css',
})
export class StepBar {
    private readonly router = inject(Router);
    public readonly documentiService: DocumentiService = inject(DocumentiService);

    steps = ['studenti', 'materie', 'indicatori', 'ICF', 'allegati'];

    // Crea una funzione di supporto per verificare lo stato
    isStepActive(stepName: string): boolean {
        const currentStep = this.steps.indexOf(this.documentiService.step);
        const step = this.steps.indexOf(stepName);
        // È attivo se il passo attuale è uguale o successivo a questo
        return currentStep >= step;
    }

    GoPage(page: string) {
        if (document.querySelector(`.${page}`)?.classList.contains('active')) {
            console.log('Navigating to:', page);
            if (page == 'studenti' || page == 'materie' || page == 'indicatori' || page == 'ICF' || page == "allegati") {
                this.router.navigate(['documenti', 'crea', page]);
            }
        }
    }
}
