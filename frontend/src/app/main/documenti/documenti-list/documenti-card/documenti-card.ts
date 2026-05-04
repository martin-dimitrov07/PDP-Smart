import { Component, inject, Input } from '@angular/core';
import { Documento, Tipo, Stato } from '../../../../models/documento';
import { NgClass } from '@angular/common';
import { DocentiService } from '../../../../shared/services/docenti.service';
import { Ruolo } from '../../../../models/docente';
import { Router } from '@angular/router';

@Component({
    selector: 'app-documenti-card',
    imports: [NgClass],
    templateUrl: './documenti-card.html',
    styleUrl: './documenti-card.css',
})
export class DocumentiCard {
    public readonly docenteService: DocentiService = inject(DocentiService);
    private _documento!: Documento;
    private readonly router: Router = inject(Router);

    // Enum per template
    public readonly StatoEnum = Stato;
    public readonly TipoEnum = Tipo;
    public readonly RuoloEnum = Ruolo;

    @Input() set documento(valore: any) {
        //appena arriva il dato dal padre, lo trasformiamo in un'istanza di Classe
        this._documento = new Documento(
            valore.Studente_Email,
            valore.Tipologia,
            valore.Anno,
            valore.Data_Approvazione
        );
    }

    get documento(): Documento {
        return this._documento;
    }

    GoEdit() {
        // console.log("Navigazione a modifica documento:", this.documento);
        this.router.navigate(["/documenti/modifica", this.documento.Studente_Email.replaceAll('.', '_'), this.documento.Anno?.getFullYear() + "-" + (this.documento.Anno!.getFullYear() + 1)]);
    }
}
