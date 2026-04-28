import { Component, Input } from '@angular/core';
import { Documento, Tipo, Stato } from '../../../../models/documento';

@Component({
    selector: 'app-documenti-card',
    imports: [],
    templateUrl: './documenti-card.html',
    styleUrl: './documenti-card.css',
})
export class DocumentiCard {
    private _documento!: Documento;
    public readonly StatoEnum = Stato;
    public readonly TipoEnum = Tipo;

    @Input() set documento(valore: any) {
        //appena arriva il dato dal padre, lo trasformiamo in un'istanza di Classe
        this._documento = new Documento(
            valore.Studente_Email,
            valore.Anno,
            valore.Tipologia,
            valore.Data_Approvazione
        );
    }

    get documento(): Documento {
        return this._documento;
    }
}
