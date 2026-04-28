import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { DocumentiService } from '../../../../../shared/services/documenti.service';
import { Router } from '@angular/router';
import { CheckError } from '../../../../../shared/utilities/check-error';
import { FormsModule } from '@angular/forms';
import { CategoriaInd } from './categoria-ind/categoria-ind';
import { CommonModule, } from "@angular/common";
import { StepsService } from '../../../../../shared/services/steps.service';
import { ModalAddNota } from './modal-add-nota/modal-add-nota';

@Component({
    selector: 'app-form-indicatori',
    imports: [FormsModule, CategoriaInd, CommonModule, ModalAddNota],
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

                        // console.log(this.documentiService.indicatori.object);

                        if (Object.keys(this.documentiService.indicatori).length == 0) {
                            this.documentiService.InitializeIndicatori();
                        }

                        this.datiCaricati = true;
                        this.cdr.detectChanges();
                    },
                    error: (err) => this.checkError.checkError(err)
                });
            },
            error: (err) => this.checkError.checkError(err)
        })

        this.documentiService.GetMaterieDocente().subscribe({
            next: (data) => {  },
            error: (err) => this.checkError.checkError(err)
        })
    }
}
