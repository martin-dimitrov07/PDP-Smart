import { Component, inject } from '@angular/core';
import { DocumentiService } from '../../../../shared/services/documenti.service';
import { StepsService } from '../../../../shared/services/steps.service';
import { DocentiService } from '../../../../shared/services/docenti.service';
import { Ruolo } from '../../../../models/docente';

@Component({
    selector: 'app-step-bar',
    imports: [],
    templateUrl: './step-bar.html',
    styleUrl: './step-bar.css',
})
export class StepBar {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    public readonly stepsService: StepsService = inject(StepsService);

    public readonly docentiService: DocentiService = inject(DocentiService);
    Ruolo: typeof Ruolo = Ruolo;

    steps = ['studenti', 'indicatori', 'icf', 'allegati'];

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
