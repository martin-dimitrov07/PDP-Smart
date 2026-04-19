import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-categoria-ind',
    imports: [],
    templateUrl: './categoria-ind.html',
    styleUrl: './categoria-ind.css',
})
export class CategoriaInd {
    private _categoria!: string;


    @Input() set categoria(valore: any) {
        this._categoria = this.categoria;
    }

    get categoria(): string {
        return this._categoria;
    }
}
