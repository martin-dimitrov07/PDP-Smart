import { Component, inject } from '@angular/core';
import { DocumentiService } from '../../../../../shared/services/documenti.service';
import { Router } from '@angular/router';
import { CheckError } from '../../../../../shared/utilities/check-error';
import { Indicatore } from '../../../../../models/indicatore';
import { FormsModule } from '@angular/forms';
import { CategoriaInd } from './categoria-ind/categoria-ind';

@Component({
    selector: 'app-form-indicatori',
    imports: [FormsModule, CategoriaInd],
    templateUrl: './form-indicatori.html',
    styleUrl: './form-indicatori.css',
})
export class FormIndicatori {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    private readonly router: Router = inject(Router);

    materiaSelected: string = "";
    checkError: any;

    ngOnInit() {
        if (this.documentiService.materieSelected.length > 0) {
            this.documentiService.tappa = "indicatori";
            this.documentiService.avanzamentoCrea = "indicatori";

            this.materiaSelected = this.documentiService.materieSelected[0];

            this.documentiService.GetCategorieIndicatore().subscribe({
                next: (data) => { console.log(this.documentiService.categorieInd) },
                error: (err) => this.checkError.checkError(err)
            })
        }
        else
            this.router.navigate(["documenti", "crea", "ICF"]);
    }

    SetValue() {

    }

    SaveMaterie() {
        this.documentiService.avanzamentoCrea = "ICF";

        this.router.navigate(["documenti", "crea", "ICF"]);
    }
}
