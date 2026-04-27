import { Component, inject, input, Input } from '@angular/core';
import { DocumentiService } from '../../../../../../shared/services/documenti.service';
import { CheckError } from '../../../../../../shared/utilities/check-error';
import { IndicatoreInput } from './indicatore-input/indicatore-input';
import { Indicatore } from '../../../../../../models/indicatore';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

    @Input() index!: number;

    @Input() set categoria(valore: string) {
        this._categoria = valore;
    }

    get categoria(): string {
        return this._categoria;
    }

    ngOnInit(){
        const tipologia = this.documentiService.studenteSelected.DSA_BES ? "DSA" : "BES";

        this.documentiService.GetIndicatori(this.categoria, tipologia).subscribe({
                next: (data: Indicatore[]) => {
                    this.indicatoriCategoria = data;
                },
                error: (err) => this.checkError.checkError(err)
        })
    }
}
