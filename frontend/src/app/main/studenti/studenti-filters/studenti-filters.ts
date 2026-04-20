import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-studenti-filters',
    imports: [FormsModule],
    templateUrl: './studenti-filters.html',
    styleUrl: './studenti-filters.css',
})
export class StudentiFilters {
    @Output() searchTermEvent = new EventEmitter<string>();
    @Output() orderValueEvent = new EventEmitter<string>();
    @Output() FilterDSA_BES = new EventEmitter<any>();

    searchTerm: string = "";
    orderValue: string = "Nome";

    Search() {
        this.searchTermEvent.emit(this.searchTerm);
        this.orderValueEvent.emit(this.orderValue);
    }

    SetFilterDSA_BES(filter: any) {
        this.FilterDSA_BES.emit(filter);
    }
}
