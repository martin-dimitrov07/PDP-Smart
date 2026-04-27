import { Component, ElementRef, inject, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { DocumentiService } from '../../../../../../../shared/services/documenti.service';
import { CommonModule } from '@angular/common';

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

    materiaSelected: string = "";

    @Output() modalNotaEvent = new EventEmitter<{ indicatore: any, materia: string, nota: string }>();

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

        // console.log(listaInd);
        // console.log(this.documentiService.indicatori);
    }

    SetModalNota(materia: string) 
    {
        console.log("Materia selezionata: ", materia, " categoria: ", this.categoria, " indicatore: ", this.indicatore);

        const listaInd = this.documentiService.indicatori[materia][this.categoria];

        const index = listaInd.findIndex((item: any) => item.Id === this.indicatore.Id);

        if (index !== -1) {
            const nota = listaInd[index].nota;
            this.modalNotaEvent.emit({ indicatore: this.indicatore, materia: materia, nota: nota });
        }
        else{
            this.modalNotaEvent.emit({ indicatore: this.indicatore, materia: materia, nota: "" });
        }
    }

    // SetNota(nota: string, materia: string) {
    //     console.log("Nota ricevuta: ", nota, " per materia: ", materia, " categoria: ", this.categoria, " indicatore: ", this.indicatore);

    //     const listaInd = this.documentiService.indicatori[materia][this.categoria];

    //     const index = listaInd.findIndex((item: any) => item.Id === this.indicatore.Id);

    //     if (index !== -1) {
    //         listaInd[index].nota = nota;
    //     }

    //     console.log(this.documentiService.indicatori);
    // }
}
