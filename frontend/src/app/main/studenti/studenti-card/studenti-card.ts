import { Component, inject, Input } from '@angular/core';
import { Studente } from '../../../models/studente';
import { Router } from '@angular/router';
import { DocumentiService } from '../../../shared/services/documenti.service';

@Component({
    selector: 'app-studenti-card',
    imports: [],
    templateUrl: './studenti-card.html',
    styleUrl: './studenti-card.css',
})
export class StudentiCard {
    private _studente!: Studente;
    private readonly router: Router = inject(Router);
    private readonly documentiService: DocumentiService = inject(DocumentiService);

    @Input() set studente(valore: any) {
        //appena arriva il dato dal padre, lo trasformiamo in un'istanza di Classe
        this._studente = new Studente(
            valore.Nome,
            valore.Cognome,
            valore.Email,
            valore.DSA_BES
        );
    }

    get studente(): Studente {
        return this._studente;
    }

    GoStudent() {
        const searchName = `${this.studente.Email}`.trim();
        const annoSelezionato = this.documentiService.annoScolasticoSelezionato;

        this.router.navigate(["documenti", "lista"], {
            queryParams: {
                search: searchName,
                anno: annoSelezionato ? annoSelezionato.toISOString() : null
            }
        });
    }
}
