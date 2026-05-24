import { Component, ElementRef, inject, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { DocumentiService } from '../../../../../../shared/services/documenti.service';
import { ActivatedRoute } from '@angular/router';
import { MaterieService } from '../../../../../../shared/services/materie.service';
import { IndicatoriService } from '../../../../../../shared/services/indicatori.service';

@Component({
    selector: 'tr[app-indicatore-input]',
    imports: [FormsModule, CommonModule],
    templateUrl: './indicatore-input.html',
    styleUrl: './indicatore-input.css',
})
export class IndicatoreInput {
    private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    public readonly indicatoriService: IndicatoriService = inject(IndicatoriService);
    public readonly materieService: MaterieService = inject(MaterieService);
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
        const setMaterieDocente = new Set(this.materieService.materieDocente);

        this.materieService.materieClasse.sort((a, b) => {
            const aInDocente = setMaterieDocente.has(a);
            const bInDocente = setMaterieDocente.has(b);

            // Restituisce -1 se 'a' deve stare prima, 1 se deve stare dopo, 0 se invariato
            return (bInDocente ? 1 : 0) - (aInDocente ? 1 : 0);
        });
    }

    HasNota(materia: string): boolean {
        const listaInd = this.indicatoriService.indicatori[materia]?.[this.categoria];
        const item = listaInd?.find((item: any) => item.Id === this.indicatore.Id);

        // Controllo esplicito: l'item esiste AND la nota non è undefined/null AND non è una stringa vuota
        if (item && item.Nota && item.Nota.trim() !== "") {
            return true;
        }
        return false;
    }

    IsItemSelected(materia: string): boolean {
        const listaInd = this.indicatoriService.indicatori[materia]?.[this.categoria];

        return listaInd
            ? listaInd.some((item: any) => item.Id === this.indicatore.Id) //some: restituisce true se almeno un elemento dell'array soddisfa la condizione specificata nella funzione di callback, altrimenti restituisce false.
            : false;
    }

    SetValue(materia: string, input: any) {
        console.log(this.indicatoriService.indicatori);
        const listaInd = this.indicatoriService.indicatori[materia][this.categoria];

        const index = listaInd.findIndex((item: any) => item.Id === this.indicatore.Id);

        if (index === -1) {
            listaInd.push({ Id: this.indicatore.Id, Nota: "" });
        }
        else {
            listaInd.splice(index, 1);
        }

        if (this.activatedRoute.snapshot.data['root'] == "modifica") {
            const indexEdit = this.indicatoriService.indicatoriEdit.findIndex((item: any) => item.Id === this.indicatore.Id && item.Materia === materia);
            if (indexEdit !== -1) {
                this.indicatoriService.indicatoriEdit[indexEdit].Value = input.target.checked;
            }
            else
                this.indicatoriService.indicatoriEdit.push({ Id: this.indicatore.Id, Materia: materia, Nota: "", Value: input.target.checked });
        }
    }

    SetNota(materia: string, canEdit: boolean) {
        this.indicatoriService.indicatoreSelected = this.indicatoriService.indicatori[materia]?.[this.categoria]?.find((item: any) => item.Id === this.indicatore.Id) || {};
        this.indicatoriService.indicatoreSelected.Materia = materia;
        this.documentiService.canEditNota = canEdit;
    }
}
