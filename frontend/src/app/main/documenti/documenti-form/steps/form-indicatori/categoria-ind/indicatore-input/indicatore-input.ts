import { Component, inject, Input } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { DocumentiService } from '../../../../../../../shared/services/documenti.service';

@Component({
    selector: 'app-indicatore-input',
    imports: [FormsModule],
    templateUrl: './indicatore-input.html',
    styleUrl: './indicatore-input.css',
})
export class IndicatoreInput {
    private readonly documentiService: DocumentiService = inject(DocumentiService);
    private _indicatore!: any;
    @Input() categoria!: string;

    isChecked: boolean = false;

    @Input() set indicatore(valore: any) {
        this._indicatore = valore;
        // console.log(this._indicatore);
    }

    get indicatore(): any {
        return this._indicatore;
    }

    SetValue() {
        const listaInd = this.documentiService.indicatori[this.documentiService.materiaSelected][this.categoria];

        const ind = listaInd.find((i: any) => i.Id === this.indicatore.Id);

        if (ind) {
            ind.Valore = !ind.Valore;
        }

        // console.log(listaInd);
    }

    ngOnInit(){
        this.isChecked = this.documentiService.indicatori[this.documentiService.materiaSelected][this.categoria].find((i: any) => i.Id === this.indicatore.Id).Valore

        // console.log(this.documentiService.indicatori[this.documentiService.materiaSelected][this.categoria]);
    }
}
