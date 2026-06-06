import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Stato, Tipo } from '../../../../models/documento';
import { DocumentiService } from '../../../../shared/services/documenti.service';


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

    public readonly documentiService: DocumentiService = inject(DocumentiService);

    @Input() searchTerm: string = "";
    TipoDocumento: typeof Tipo = Tipo; 

    ngOnInit() {
        this.searchTerm = this.documentiService.searchTermFilter;
    }

    Search() {
        this.documentiService.searchTermFilter = this.searchTerm;
        this.searchTermEvent.emit(this.searchTerm);
    }

    SetFilterDSA_BES(filter: any) {
        if (filter == -1) {
            this.documentiService.TipoFilter = null;
        } else if (filter == true) {
            this.documentiService.TipoFilter = Tipo.DSA;
        } else if (filter == false) {
            this.documentiService.TipoFilter = Tipo.BES;
        }

        this.FilterDSA_BES.emit(filter);
    }

    SetFilterStato(stato: string) {
        this.FilterStato.emit(stato);
    }
}
