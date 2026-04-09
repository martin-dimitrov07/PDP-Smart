import { Component, Input } from '@angular/core';
import { Studente } from '../../../models/studente';

@Component({
    selector: 'app-studenti-card',
    imports: [],
    templateUrl: './studenti-card.html',
    styleUrl: './studenti-card.css',
})
export class StudentiCard {
    private _studente!: Studente;

    @Input() set studente(valore: any) {
        //appena arriva il dato dal padre, lo trasformiamo in un'istanza di Classe
        this._studente = new Studente(
            valore.Nome,
            valore.Cognome,
            valore.Email,
            valore.DSA_BES
        );
        // console.log(this._studente);
    }

    get studente(): Studente {
        return this._studente;
    }
}
