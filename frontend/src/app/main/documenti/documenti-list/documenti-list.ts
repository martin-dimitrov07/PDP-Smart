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
    private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    private readonly router: Router = inject(Router);

    private platformId = inject(PLATFORM_ID);

    public searchTerm: string = "";
    private DSA_BES: any = -1;
    private Stato_Documento: any = -1;
    private filterAnnoScolastico: any = {};

    private filterStato: any = { in: [] };
    private timer: any;
    classiCoordinateIds: number[] = [];

    public isLoadingDocs: boolean = false;

    ngOnInit() {
        this.isLoadingDocs = true;
        const querySearch = this.activatedRoute.snapshot.queryParamMap.get('search');
        const queryAnno = this.activatedRoute.snapshot.queryParamMap.get('anno');

        if (querySearch) {
            this.searchTerm = querySearch;
        }
        if (queryAnno) {
            this.filterAnnoScolastico = new Date(queryAnno);
        }

        if (querySearch || queryAnno) {
            this.router.navigate([], {
                relativeTo: this.activatedRoute,
                queryParams: { search: null, anno: null },
                queryParamsHandling: 'merge'
            });
        }

        this.classiService.GetClassiCoordinatore(this.docentiService.docente.Email).subscribe({
            next: (res) => {
                this.classiCoordinateIds = Object.values(res).flat().map((c: any) => c.Id);
            },
            error: (err) => this.checkError.checkError(err)
        });

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
                this.isLoadingDocs = false;
            },
            error: (err: any) => {
                if (err.status == 404)
                    this.documentiService.documenti = [];

                this.checkError.checkError(err);
                this.isLoadingDocs = false;
            }
        });
    }

    SetFilterStato(stato: string) {
        this.isLoadingDocs = true;
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
        this.isLoadingDocs = true;
        document.querySelector("#annoDropdown")!.textContent = annoScolastico.getFullYear().toString() + "/" + (annoScolastico.getFullYear() + 1).toString();
        this.filterAnnoScolastico = annoScolastico;
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
                    if (err.status == 404)
                        this.documentiService.documenti = [];

                    this.checkError.checkError(err);
                    this.isLoadingDocs = false;
                }
            });
        }, 500)
    }
}
