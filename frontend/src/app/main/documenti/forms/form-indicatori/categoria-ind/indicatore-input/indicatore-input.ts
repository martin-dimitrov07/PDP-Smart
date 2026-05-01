import { Component, ElementRef, inject, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { DocumentiService } from '../../../../../../shared/services/documenti.service';

@Component({
    selector: 'tr[app-indicatore-input]',
    imports: [FormsModule, CommonModule],
    templateUrl: './indicatore-input.html',
    styleUrl: './indicatore-input.css',
})
export class IndicatoreInput {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    private _indicatore!: any;
    @Input() categoria!: string;

    @Input() set indicatore(valore: any) {
        this._indicatore = valore;
        // console.log(this._indicatore);
    }

    get indicatore(): any {
        return this._indicatore;
    }

    ngOnInit() {
        // console.log(this.documentiService.materieDocente);

        const setMaterieDocente = new Set(this.documentiService.materieDocente);

        this.documentiService.materieClasse.sort((a, b) => {
            const aInDocente = setMaterieDocente.has(a);
            const bInDocente = setMaterieDocente.has(b);

            // Restituisce -1 se 'a' deve stare prima, 1 se deve stare dopo, 0 se invariato
            return (bInDocente ? 1 : 0) - (aInDocente ? 1 : 0);
        });
    }

    HasNota(materia: string): boolean {
        const listaInd = this.documentiService.indicatori[materia]?.[this.categoria];
        const item = listaInd?.find((item: any) => item.Id === this.indicatore.Id);

        // Controllo esplicito: l'item esiste AND la nota non è undefined/null AND non è una stringa vuota
        if (item && item.Nota && item.Nota.trim() !== "") {
            return true;
        }
        return false;
    }

    IsItemSelected(materia: string): boolean {
        const listaInd = this.documentiService.indicatori[materia]?.[this.categoria];

        return listaInd
            ? listaInd.some((item: any) => item.Id === this.indicatore.Id) //some: restituisce true se almeno un elemento dell'array soddisfa la condizione specificata nella funzione di callback, altrimenti restituisce false.
            : false;
    }

    SetValue(materia: string) {
        console.log(this.documentiService.indicatori);
        const listaInd = this.documentiService.indicatori[materia][this.categoria];

        const index = listaInd.findIndex((item: any) => item.Id === this.indicatore.Id);

        if (index === -1) {
            listaInd.push({ Id: this.indicatore.Id, Nota: "" });
        }
        else {
            listaInd.splice(index, 1);
        }

        // console.log(listaInd);
        // console.log(this.documentiService.indicatori);
    }

    SetNota(materia: string) {
        this.documentiService.indicatoreSelected = this.documentiService.indicatori[materia]?.[this.categoria]?.find((item: any) => item.Id === this.indicatore.Id) || {};

        // console.log(this.documentiService.indicatori);
        // console.log(this.documentiService.indicatoreSelected);
    }
}
