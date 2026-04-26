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
    private Stato_Documento: any = -1;
    private filterAnnoScolastico: any = {};

    private filterStato: any = { in: [] };
    private timer: any;

    ngOnInit() {
        this.documentiService.GetAnniScolastici().subscribe({
            next: (data: any) => {
                if (isPlatformBrowser(this.platformId)) {
                    document.querySelector("#annoDropdown")!.textContent = this.documentiService.anniScolastici[0].getFullYear().toString() + "/" + (this.documentiService.anniScolastici[0].getFullYear() + 1).toString();
                }
                this.filterAnnoScolastico = this.documentiService.anniScolastici[0];
                this.documentiService.GetDocumenti(this.searchTerm, this.DSA_BES, this.Stato_Documento, this.filterAnnoScolastico).subscribe({
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

        this.documentiService.GetDocumenti(this.searchTerm, this.DSA_BES, this.Stato_Documento, this.filterAnnoScolastico).subscribe({
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
            this.resetFilterStatoDocumenti();
        } else {
            const index = this.filterStato.in.indexOf(stato);
            const elementId = this.getButtonId(stato);

            if (index > -1) {
                this.filterStato.in.splice(index, 1);
                document.getElementById(elementId)?.classList.remove("active");
            } else {
                this.filterStato.in.push(stato);
                document.getElementById(elementId)?.classList.add("active");
                document.getElementById("tipoDoc-all")?.classList.remove("active");
            }

            if (this.filterStato.in.length == 3 || this.filterStato.in.length == 0) {
                this.resetFilterStatoDocumenti();
            }
        }

        // Se l'array è vuoto manda -1, altrimenti manda l'oggetto per Prisma
        this.Stato_Documento = this.filterStato.in.length == 0 ? -1 : this.filterStato;
        console.log("Dati inviati:", this.Stato_Documento);

        // Chiamata al servizio
        this.documentiService.GetDocumenti(this.searchTerm, this.DSA_BES, this.Stato_Documento, this.filterAnnoScolastico).subscribe({
            next: (data: any) => {
                this.documentiService.GetNumeroDocumenti();
            },
            error: (err: any) => this.checkError.checkError(err)
        });
    }

    // Funzione di supporto per recuperare l'ID corretto del bottone
    private getButtonId(stato: string): string {
        switch (stato) {
            case 'SCADUTO': return 'tipoDoc-scaduto';
            case 'IN_BOZZA': return 'tipoDoc-in-bozza';
            case 'VALIDATO': return 'tipoDoc-approvato';
            default: return '';
        }
    }

    resetFilterStatoDocumenti() {
        if (!isPlatformBrowser(this.platformId)) return;

        this.Stato_Documento = -1;
        this.filterStato.in = [];
        document.getElementById("tipoDoc-all")?.classList.add("active");
        for (const element of document.querySelectorAll(".tipoDoc-tab")) {
            if (element.id != "tipoDoc-all") {
                element.classList.remove("active");
            }
        }
    }

    SetFilterAnnoScolastico(annoScolastico: Date) {
        document.querySelector("#annoDropdown")!.textContent = annoScolastico.getFullYear().toString() + "/" + (annoScolastico.getFullYear() + 1).toString();
        this.filterAnnoScolastico = annoScolastico;
        this.documentiService.GetDocumenti(this.searchTerm, this.DSA_BES, this.Stato_Documento, this.filterAnnoScolastico).subscribe({
            next: (data: any) => {
                this.documentiService.GetNumeroDocumenti();
            },
            error: (err: any) => this.checkError.checkError(err)
        });
    }

    SearchDocuments(searchTerm: string) {
        clearTimeout(this.timer);

        this.searchTerm = searchTerm;
        this.timer = setTimeout(() => {
            this.documentiService.GetDocumenti(this.searchTerm, this.DSA_BES, this.Stato_Documento, this.filterAnnoScolastico).subscribe({
                next: () => {
                    this.documentiService.GetNumeroDocumenti();
                },
                error: (err: any) => {
                    if (err.status == 404)
                        this.documentiService.documenti = [];

                    this.checkError.checkError(err)
                }
            });
        }, 500)
    }
}
