import { Component, Input } from '@angular/core';
import { Documento } from '../../../../models/documento';

@Component({
  selector: 'app-documenti-card',
  imports: [],
  templateUrl: './documenti-card.html',
  styleUrl: './documenti-card.css',
})
export class DocumentiCard {
    private _documento!: Documento;

    @Input() set documento(valore: any) {
        //appena arriva il dato dal padre, lo trasformiamo in un'istanza di Classe
        this._documento = new Documento(
            valore.Studente_Email,
            valore.Anno,
            valore.Stato,
            valore.Tipologia
        );
    }

    get documento(): Documento {
        return this._documento;
    }
}
