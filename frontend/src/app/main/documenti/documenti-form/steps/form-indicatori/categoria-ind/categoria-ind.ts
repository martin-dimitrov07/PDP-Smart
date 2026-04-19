import { Component, inject, Input } from '@angular/core';
import { DocumentiService } from '../../../../../../shared/services/documenti.service';
import { CheckError } from '../../../../../../shared/utilities/check-error';
import { IndicatoreInput } from './indicatore-input/indicatore-input';

@Component({
    selector: 'app-categoria-ind',
    imports: [IndicatoreInput],
    templateUrl: './categoria-ind.html',
    styleUrl: './categoria-ind.css',
})
export class CategoriaInd {
    private _categoria!: string;
    @Input() materiaSelected: string = "";
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    private readonly checkError: CheckError = inject(CheckError);

    @Input() set categoria(valore: string) {
        this._categoria = valore;
    }

    get categoria(): string {
        return this._categoria;
    }

    ngOnInit(){
        this.documentiService.GetIndicatori(this.categoria).subscribe({
            next: (data) => { console.log(this.documentiService.indicatori) },
            error: (err) => this.checkError.checkError(err)
        })
    }
}
