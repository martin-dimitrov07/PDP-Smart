import { Component, inject } from '@angular/core';
import { ModalAddIcf } from './modal-add-icf/modal-add-icf';
import { DocumentiService } from '../../../../shared/services/documenti.service';
import { StepsService } from '../../../../shared/services/steps.service';
import { Icf } from '../../../../models/icf';
import { Ruolo } from '../../../../models/docente';
import { ActivatedRoute, Router } from '@angular/router';
import { DocentiService } from '../../../../shared/services/docenti.service';
import { DocumentiEditBreadcrumb } from '../../documenti-edit/documenti-edit-breadcrumb/documenti-edit-breadcrumb';
import { CheckError } from '../../../../shared/utilities/check-error';
import { Stato } from '../../../../models/documento';
import { IcfService } from '../../../../shared/services/icf.service';
import { lastValueFrom } from 'rxjs';

@Component({
    selector: 'app-form-icf',
    imports: [ModalAddIcf, DocumentiEditBreadcrumb],
    templateUrl: './form-icf.html',
    styleUrl: './form-icf.css',
})
export class FormICF {
    public readonly docentiService: DocentiService = inject(DocentiService);
    private readonly router: Router = inject(Router);
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    public readonly icfService: IcfService = inject(IcfService);
    public readonly stepsService: StepsService = inject(StepsService);
    public readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    private readonly checkError: CheckError = inject(CheckError);

    root: string = "";

    Ruolo: typeof Ruolo = Ruolo;
    StatoDocumento: typeof Stato = Stato;

    prevPage: string = "";

    public isLoading: boolean = false;

    ngOnInit() {
        this.root = this.activatedRoute.snapshot.data["root"];

        if (this.root == "modifica") {
            this.isLoading = true;
            this.icfService.icfsEdit = [];
            this.icfService.newIcfs = [];
            this.icfService.GetICFSDocumento()?.subscribe({
                next: (data: any) => {
                    console.log(this.icfService.icfsSelected);
                },
                error: (err: any) => console.log(err)
            });
        }

        this.docentiService.GetDocente().subscribe(isLoaded => {
            if (isLoaded) {
                const ruolo = this.docentiService.docente.Ruolo;

                if (ruolo != Ruolo.ADMIN && this.root == "crea") {
                    this.router.navigate(["404"]);
                } else {
                    this.stepsService.step = "ICF";
                }
            }
            this.isLoading = false;
        });
    }

    SaveICF(icf: Icf) {
        if (this.icfService.icfsSelected.findIndex((icfArray: Icf) => icfArray.Codice == icf.Codice) == -1) {
            this.icfService.icfsSelected.push(new Icf(icf.Codice, icf.Descrizione));

            if (this.icfService.icfs.findIndex((icfArray: Icf) => icfArray.Codice == icf.Codice) == -1) {
                this.icfService.newIcfs.push(new Icf(icf.Codice, icf.Descrizione));
            }

            if (this.root == "modifica") {
                const indexICFEdit = this.icfService.icfsEdit.findIndex((icfEdit: any) => icfEdit.Icf.Codice == icf.Codice);
                if (indexICFEdit != -1) {
                    this.icfService.icfsEdit[indexICFEdit].Value = true;
                } else {
                    this.icfService.icfsEdit.push({ Icf: new Icf(icf.Codice, icf.Descrizione), Value: true });
                }
            }
        }
        // console.log(this.icfService.icfsEdit);
    }

    RemoveICF(codice: string) {
        this.icfService.icfsSelected.splice(this.icfService.icfsSelected.findIndex(icf => icf.Codice == codice), 1);

        if (this.icfService.newIcfs.findIndex((icfArray: Icf) => icfArray.Codice == codice) != -1) {
            this.icfService.newIcfs.splice(this.icfService.newIcfs.findIndex((icfArray: Icf) => icfArray.Codice == codice), 1);
        }

        if (this.root == "modifica") {
            const indexICFEdit = this.icfService.icfsEdit.findIndex((icfEdit: any) => icfEdit.Icf.Codice == codice);
            if (indexICFEdit != -1) {
                this.icfService.icfsEdit.splice(indexICFEdit, 1);
            } else {
                this.icfService.icfsEdit.push({ Icf: new Icf(codice), Value: false });
            }
        }
        // console.log(this.icfService.icfsEdit);
    }

    async Edit() {
        try {
            if (this.icfService.newIcfs.length > 0) {
                await lastValueFrom(this.icfService.CreateICFs(this.icfService.newIcfs));
            }

            if (this.icfService.icfsEdit.length > 0) {
                await lastValueFrom(this.icfService.UpdateICFsDocumento());
            }

            this.router.navigate(["../"], { relativeTo: this.activatedRoute });
        }
        catch (err) {
            this.checkError.checkError(err);
        }
    }
}
