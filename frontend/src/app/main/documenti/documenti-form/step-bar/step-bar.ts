import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentiService } from '../../../../shared/services/documenti.service';
import { NgClass } from "@angular/common";

@Component({
    selector: 'app-step-bar',
    imports: [NgClass],
    templateUrl: './step-bar.html',
    styleUrl: './step-bar.css',
})
export class StepBar {
    private readonly router = inject(Router);
    public readonly documentiService: DocumentiService = inject(DocumentiService);

    GoPage(page: string) {
        let avanzamento = this.documentiService.avanzamentoCrea;

        if (document.querySelector(`.${page}`)?.classList.contains('active')) {
            console.log('Navigating to:', page);
            if (avanzamento === 'studenti' || avanzamento === 'materie' || avanzamento === 'indicatori' || avanzamento === 'conferma') {
                this.router.navigate(['documenti', 'crea', page]);
            }
        }
    }
}
