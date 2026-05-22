import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-documenti-filters',
    imports: [FormsModule],
    templateUrl: './documenti-filters.html',
    styleUrl: './documenti-filters.css',
})
export class DocumentiFilters {
    @Output() FilterDSA_BES = new EventEmitter<any>();
    @Output() FilterStato = new EventEmitter<string>();
    @Output() searchTermEvent = new EventEmitter<string>();

    @Input() searchTerm: string = "";

    Search() {
        this.searchTermEvent.emit(this.searchTerm);
    }

    SetFilterDSA_BES(filter: any) {
        this.FilterDSA_BES.emit(filter);
    }

    SetFilterStato(stato: string) {
        this.FilterStato.emit(stato);
    }
}
