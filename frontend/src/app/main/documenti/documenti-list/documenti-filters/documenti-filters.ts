import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-documenti-filters',
    imports: [],
    templateUrl: './documenti-filters.html',
    styleUrl: './documenti-filters.css',
})
export class DocumentiFilters {
    @Output() FilterDSA_BES = new EventEmitter<any>();
    @Output() FilterStato = new EventEmitter<string>();

    SetFilterDSA_BES(filter: any) {
        this.FilterDSA_BES.emit(filter);
    }

    SetFilterStato(stato: string) {
        this.FilterStato.emit(stato);
    }
}
