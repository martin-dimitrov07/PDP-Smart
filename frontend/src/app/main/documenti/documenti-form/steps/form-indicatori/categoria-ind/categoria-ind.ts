import { Component, inject, input, Input, Output, EventEmitter } from '@angular/core';
import { DocumentiService } from '../../../../../../shared/services/documenti.service';
import { CheckError } from '../../../../../../shared/utilities/check-error';
import { IndicatoreInput } from './indicatore-input/indicatore-input';
import { Indicatore } from '../../../../../../models/indicatore';

@Component({
    selector: 'app-categoria-ind',
    imports: [IndicatoreInput],
    templateUrl: './categoria-ind.html',
    styleUrl: './categoria-ind.css',
})
export class CategoriaInd {
    private _categoria!: string;
    public indicatoriCategoria: Indicatore[] = [];
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    private readonly checkError: CheckError = inject(CheckError);

    @Output() modalNotaEvent = new EventEmitter<{ indicatore: any, materia: string, nota: string, categoria: string }>();

    @Input() index!: number;

    @Input() set categoria(valore: string) {
        this._categoria = valore;
    }

    get categoria(): string {
        return this._categoria;
    }

    ngOnInit() {
        const tipologia = this.documentiService.studenteSelected.DSA_BES ? "DSA" : "BES";

        this.documentiService.GetIndicatori(this.categoria, tipologia).subscribe({
            next: (data: Indicatore[]) => {
                this.indicatoriCategoria = data;
            },
            error: (err) => this.checkError.checkError(err)
        })
    }

    SetModalNota(evento: { indicatore: any, materia: string, nota: string }) {
        console.log("Materia selezionata: ", evento.materia, " nota: ", evento.nota, " indicatore: ", evento.indicatore);

        this.modalNotaEvent.emit({ indicatore: evento.indicatore, materia: evento.materia, nota: evento.nota, categoria: this.categoria });
    }
}
