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

    private readonly documentiService: DocumentiService = inject(DocumentiService);

    @Input() searchTerm: string = "";

    ngOnInit() {
        this.searchTerm = this.documentiService.searchTermFilter;
    }

    ngAfterViewInit() {
        if (this.documentiService.TipoFilter === Tipo.DSA) {
            document.querySelector("#badges-dsa")!.classList.add("active");
        } else if (this.documentiService.TipoFilter === Tipo.BES) {
            document.querySelector("#badges-bes")!.classList.add("active");
        } else {
            document.querySelector("#badges-all")!.classList.add("active");
        }

        if (this.documentiService.StatoFilter === Stato.IN_BOZZA) {
            document.querySelector("#tipoDoc-in-bozza")!.classList.add("active");
        } else if (this.documentiService.StatoFilter === Stato.SCADUTO) {
            document.querySelector("#tipoDoc-scaduto")!.classList.add("active");
        } else if (this.documentiService.StatoFilter === Stato.VALIDATO) {
            document.querySelector("#tipoDoc-approvato")!.classList.add("active");
        } else {
            document.querySelector("#tipoDoc-all")!.classList.add("active");
        }
    }

    Search() {
        this.documentiService.searchTermFilter = this.searchTerm;
        this.searchTermEvent.emit(this.searchTerm);
    }

    SetFilterDSA_BES(filter: any) {
        this.documentiService.TipoFilter =
            filter ? Tipo.DSA :
                !filter ? Tipo.BES :
                    null
            ;

        this.FilterDSA_BES.emit(filter);
    }

    SetFilterStato(stato: string) {
        this.documentiService.StatoFilter =
            stato === "SCADUTO" ? Stato.SCADUTO :
                stato === "IN_BOZZA" ? Stato.IN_BOZZA :
                    stato === "VALIDATO" ? Stato.VALIDATO :
                        null
            ;

        this.FilterStato.emit(stato);
    }
}
