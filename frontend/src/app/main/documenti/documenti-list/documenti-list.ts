import { Component, inject, PLATFORM_ID } from '@angular/core';
import { DocumentiCard } from "./documenti-card/documenti-card";
import { DocumentiHeader } from "./documenti-header/documenti-header";
import { DocumentiFilters } from "./documenti-filters/documenti-filters";
import { CheckError } from '../../../shared/utilities/check-error';
import { isPlatformBrowser } from '@angular/common';
import { DocumentiService } from '../../../shared/services/documenti.service';

@Component({
    selector: 'app-documenti-list',
    imports: [DocumentiCard, DocumentiHeader, DocumentiFilters],
    templateUrl: './documenti-list.html',
    styleUrl: './documenti-list.css',
})
export class DocumentiList {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    private readonly checkError: CheckError = inject(CheckError);

    private platformId = inject(PLATFORM_ID);

    private searchTerm: string = "";
    private DSA_BES: any = -1;
    private Tipo_Documento: any = -1;
    private filterAnnoScolastico: any = {};

    ngOnInit() {
        this.documentiService.GetAnniScolastici().subscribe({
            next: (data: any) => {
                if (isPlatformBrowser(this.platformId)) {
                    document.querySelector("#annoDropdown")!.textContent = this.documentiService.anniScolastici[0].getFullYear().toString() + "/" + (this.documentiService.anniScolastici[0].getFullYear() + 1).toString();
                }
                this.filterAnnoScolastico = this.documentiService.anniScolastici[0];
                this.documentiService.GetDocumenti(this.searchTerm, this.DSA_BES, this.Tipo_Documento, this.filterAnnoScolastico).subscribe({
                    next: (data: any) => {
                        this.documentiService.GetNumeroDocumenti();
                    },
                    error: (err: any) => this.checkError.checkError(err)
                });
            },
            error: (err: any) => this.checkError.checkError(err)
        });
    }

    SetFilterDSA_BES(filter: any) {
        if (filter == -1) {
            this.DSA_BES = -1;
            document.getElementById("badges-dsa")?.classList.remove("active");
            document.getElementById("badges-bes")?.classList.remove("active");
            document.getElementById("badges-all")?.classList.add("active");
        }
        else if (filter) {
            this.DSA_BES = "DSA";
            document.getElementById("badges-dsa")?.classList.add("active");
            document.getElementById("badges-bes")?.classList.remove("active");
            document.getElementById("badges-all")?.classList.remove("active");
        }
        else {
            this.DSA_BES = "BES";
            document.getElementById("badges-dsa")?.classList.remove("active");
            document.getElementById("badges-bes")?.classList.add("active");
            document.getElementById("badges-all")?.classList.remove("active");
        }

        this.documentiService.GetDocumenti(this.searchTerm, this.DSA_BES, this.Tipo_Documento, this.filterAnnoScolastico).subscribe({
            next: () => {
                this.documentiService.GetNumeroDocumenti();
            },
            error: (err: any) => {
                if (err.status == 404)
                    this.documentiService.documenti = [];

                this.checkError.checkError(err)
            }
        });
    }

    SetFilterStato(stato: string) {
        if (stato == "Tutti") {
            this.Tipo_Documento = -1;
        }
        else if (stato == "Scaduto") {
            this.Tipo_Documento = "Scaduto";
        }
        else if (stato == "In bozza") {
            this.Tipo_Documento = "In bozza";
        }
        else if (stato == "Approvato") {
            this.Tipo_Documento = "Approvato";
        }
    }
}
