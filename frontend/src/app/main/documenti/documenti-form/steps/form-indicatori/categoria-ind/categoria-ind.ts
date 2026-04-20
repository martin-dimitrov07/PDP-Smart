import { Component, inject, Input } from '@angular/core';
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
    public indicatoriCategoria: any[] = []; 
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    // private readonly checkError: CheckError = inject(CheckError);

    @Input() set categoria(valore: string) {
        this._categoria = valore;
    }

    get categoria(): string {
        return this._categoria;
    }

    ngOnInit(){
        // console.log(this.materiaSelected);
        // console.log(this.documentiService.indicatori[this.materiaSelected])
        this.indicatoriCategoria = this.documentiService.indicatori[this.documentiService.materiaSelected][this.categoria];
        // console.log(this.indicatoriCategoria);
    }
}
