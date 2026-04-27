import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { DocumentiService } from '../../../../../shared/services/documenti.service';
import { Router } from '@angular/router';
import { CheckError } from '../../../../../shared/utilities/check-error';
import { FormsModule } from '@angular/forms';
import { CategoriaInd } from './categoria-ind/categoria-ind';
import { CommonModule, } from "@angular/common";
import { StepsService } from '../../../../../shared/services/steps.service';

@Component({
    selector: 'app-form-indicatori',
    imports: [FormsModule, CategoriaInd, CommonModule],
    templateUrl: './form-indicatori.html',
    styleUrl: './form-indicatori.css',
})
export class FormIndicatori {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    public readonly stepsService: StepsService = inject(StepsService);
    private readonly checkError: CheckError = inject(CheckError);

    datiCaricati: boolean = false;

    private readonly cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

    ngOnInit() {
        this.stepsService.step = "indicatori";

        this.documentiService.GetMaterieClasse().subscribe({
            next: (data) => {
                this.documentiService.GetCategorieIndicatore().subscribe({
                    next: (data) => {
                        this.datiCaricati = false;
                        // Forziamo Angular a capire che c'è stato un cambiamento
                        this.cdr.detectChanges();

                        this.InitializeIndicatori();

                        this.datiCaricati = true;
                        this.cdr.detectChanges();
                    },
                    error: (err) => this.checkError.checkError(err)
                });
            },
            error: (err) => this.checkError.checkError(err)
        })
    }

    InitializeIndicatori() {
        for (let materia of this.documentiService.materieClasse) {
            this.documentiService.indicatori[materia] = {};

            for (let categoria of this.documentiService.categorieInd) {
                this.documentiService.indicatori[materia][categoria] = [];
            }
        }
    }
}
