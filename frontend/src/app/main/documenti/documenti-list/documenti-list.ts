import { Component, inject, PLATFORM_ID } from '@angular/core';
import { DocumentiCard } from "./documenti-card/documenti-card";
import { DocumentiHeader } from "./documenti-header/documenti-header";
import { DocumentiFilters } from "./documenti-filters/documenti-filters";
import { CheckError } from '../../../shared/utilities/check-error';
import { isPlatformBrowser } from '@angular/common';
import { DocumentiService } from '../../../shared/services/documenti.service';
import { DocentiService } from '../../../shared/services/docenti.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassiService } from '../../../shared/services/classi.service';
import { AnniScolasticiService } from '../../../shared/services/anni-scolastici.service';
import { ModalDeleteDocumento } from './modal-delete-documento/modal-delete-documento';
import { Stato, Tipo } from '../../../models/documento';

@Component({
    selector: 'app-documenti-list',
    imports: [DocumentiCard, DocumentiHeader, DocumentiFilters, ModalDeleteDocumento],
    templateUrl: './documenti-list.html',
    styleUrl: './documenti-list.css',
})
export class DocumentiList {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    private readonly docentiService: DocentiService = inject(DocentiService);
    private readonly anniScolasticiService: AnniScolasticiService = inject(AnniScolasticiService);
    private readonly classiService: ClassiService = inject(ClassiService);
    private readonly checkError: CheckError = inject(CheckError);

    private platformId = inject(PLATFORM_ID);

    private timer: any;

    public isLoadingDocs: boolean = false;

    public searchTerm: string = "";
    private DSA_BES: any;
    private Stato_Documento: any;
    private filterAnnoScolastico: any = {};
    private filterStato: any = { in: [] };

    ngOnInit() {
        this.isLoadingDocs = true;
        const querySearch = this.documentiService.searchTermFilter;
        const queryAnno = this.documentiService.annoScolasticoFilter;

        const tipoFilter = this.documentiService.TipoFilter;
        this.DSA_BES = tipoFilter == Tipo.DSA ? "DSA" : tipoFilter === Tipo.BES ? "BES" : -1;

        const statiSalvati = this.documentiService.StatoFilter;
        if (statiSalvati && statiSalvati.length > 0) {
            this.filterStato.in = [...statiSalvati];
            this.Stato_Documento = this.filterStato;
        } else {
            this.filterStato.in = [];
            this.Stato_Documento = -1;
        }

        if (querySearch) {
            this.searchTerm = querySearch;
        }
        if (queryAnno) {
            this.filterAnnoScolastico = new Date(queryAnno);
        }

        this.anniScolasticiService.GetAnniScolasticiDocumenti().subscribe({
            next: (data: any) => {
                if (isPlatformBrowser(this.platformId) && this.anniScolasticiService.anniScolastici.length > 0) {
                    document.querySelector("#annoDropdown")!.textContent = this.anniScolasticiService.anniScolastici[0].getFullYear().toString() + "/" + (this.anniScolasticiService.anniScolastici[0].getFullYear() + 1).toString();
                }

                if (queryAnno && isPlatformBrowser(this.platformId)) {
                    document.querySelector("#annoDropdown")!.textContent = this.filterAnnoScolastico.getFullYear().toString() + "/" + (this.filterAnnoScolastico.getFullYear() + 1).toString();
                } else {
                    this.filterAnnoScolastico = this.anniScolasticiService.anniScolastici[0];
                }

                this.documentiService.GetDocumenti(this.searchTerm, this.DSA_BES, this.Stato_Documento, this.filterAnnoScolastico).subscribe({
                    next: (data: any) => {
                        this.documentiService.GetNumeroDocumenti();
                        this.isLoadingDocs = false;
                    },
                    error: (err: any) => {
                        this.checkError.checkError(err);
                        this.isLoadingDocs = false;
                    }
                });
            },
            error: (err: any) => {
                this.checkError.checkError(err);
                this.isLoadingDocs = false;
            }
        });
    }

    SetFilterDSA_BES(filter: any) {
        this.isLoadingDocs = true;
        if (filter == -1) {
            this.DSA_BES = -1;
        }
        else if (filter) {
            this.DSA_BES = "DSA";
        }
        else {
            this.DSA_BES = "BES";
        }

        this.documentiService.GetDocumenti(this.searchTerm, this.DSA_BES, this.Stato_Documento, this.filterAnnoScolastico).subscribe({
            next: () => {
                this.documentiService.GetNumeroDocumenti();
                this.isLoadingDocs = false;
            },
            error: (err: any) => {
                    this.checkError.checkError(err);
                this.isLoadingDocs = false;
            }
        });
    }

    SetFilterStato(stato: string) {
        this.isLoadingDocs = true;

        if (stato == "Tutti") {
            this.filterStato.in = [];
        } else {
            const index = this.filterStato.in.indexOf(stato);

            if (index > -1) {
                this.filterStato.in.splice(index, 1); 
            } else {
                this.filterStato.in.push(stato); 
            }

            if (this.filterStato.in.length == 3 || this.filterStato.in.length == 0) {
                this.filterStato.in = [];
            }
        }

        this.documentiService.StatoFilter = [...this.filterStato.in];
        this.Stato_Documento = this.filterStato.in.length == 0 ? -1 : this.filterStato;

        this.documentiService.GetDocumenti(this.searchTerm, this.DSA_BES, this.Stato_Documento, this.filterAnnoScolastico).subscribe({
            next: (data: any) => {
                this.documentiService.GetNumeroDocumenti();
                this.isLoadingDocs = false;
            },
            error: (err: any) => {
                this.checkError.checkError(err);
                this.isLoadingDocs = false;
            }
        });
    }

    SetFilterAnnoScolastico(annoScolastico: Date) {
        this.isLoadingDocs = true;
        document.querySelector("#annoDropdown")!.textContent = annoScolastico.getFullYear().toString() + "/" + (annoScolastico.getFullYear() + 1).toString();
        this.filterAnnoScolastico = annoScolastico;
        this.documentiService.annoScolasticoFilter = annoScolastico;
        this.documentiService.GetDocumenti(this.searchTerm, this.DSA_BES, this.Stato_Documento, this.filterAnnoScolastico).subscribe({
            next: (data: any) => {
                this.documentiService.GetNumeroDocumenti();
                this.isLoadingDocs = false;
            },
            error: (err: any) => {
                this.checkError.checkError(err);
                this.isLoadingDocs = false;
            }
        });
    }

    SearchDocuments(searchTerm: string) {
        this.isLoadingDocs = true;
        clearTimeout(this.timer);

        this.searchTerm = searchTerm;
        this.timer = setTimeout(() => {
            this.documentiService.GetDocumenti(this.searchTerm, this.DSA_BES, this.Stato_Documento, this.filterAnnoScolastico).subscribe({
                next: () => {
                    this.documentiService.GetNumeroDocumenti();
                    this.isLoadingDocs = false;
                },
                error: (err: any) => {
                    this.checkError.checkError(err);
                    this.isLoadingDocs = false;
                }
            });
        }, 500)
    }
}
