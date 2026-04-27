import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { DocumentiService } from '../../../../../../../shared/services/documenti.service';
import * as bootstrap from 'bootstrap';

import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
    selector: 'tr[app-indicatore-input]',
    imports: [FormsModule],
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

    IsItemSelected(materia: string): boolean {
        const listaInd = this.documentiService.indicatori[materia]?.[this.categoria];

        return listaInd
            ? listaInd.some((item: any) => item.Id === this.indicatore.Id) //some: restituisce true se almeno un elemento dell'array soddisfa la condizione specificata nella funzione di callback, altrimenti restituisce false.
            : false;
    }

    SetValue(materia: string) {
        const listaInd = this.documentiService.indicatori[materia][this.categoria];

        const index = listaInd.findIndex((item: any) => item.Id === this.indicatore.Id);

        if (index === -1) {
            listaInd.push({ Id: this.indicatore.Id, nota: "" });
        }
        else {
            listaInd.splice(index, 1);
        }

        console.log(listaInd);
        console.log(this.documentiService.indicatori);
    }
}
