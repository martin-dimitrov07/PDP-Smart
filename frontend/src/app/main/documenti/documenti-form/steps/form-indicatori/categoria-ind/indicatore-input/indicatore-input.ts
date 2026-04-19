import { Component, Input } from '@angular/core';
import { Indicatore } from '../../../../../../../models/indicatore';
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-indicatore-input',
    imports: [FormsModule],
    templateUrl: './indicatore-input.html',
    styleUrl: './indicatore-input.css',
})
export class IndicatoreInput {
    private _indicatore!: Indicatore;

    isChecked: boolean = false;

    @Input() set indicatore(valore: Indicatore) {
        this._indicatore = new Indicatore(valore.Id, valore.Tipologia, valore.Categoria, valore.Descrizione);
        console.log(this._indicatore);
    }

    get indicatore(): Indicatore {
        return this._indicatore;
    }

    ngOnInit(){
        console.log(this._indicatore);
    }
}
