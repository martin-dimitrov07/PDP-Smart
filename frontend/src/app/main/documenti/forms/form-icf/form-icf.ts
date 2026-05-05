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
    public readonly stepsService: StepsService = inject(StepsService);
    public readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    private readonly checkError: CheckError = inject(CheckError);

    root: string = "";

    Ruolo: typeof Ruolo = Ruolo;

    prevPage: string = "";

    ngOnInit() {
        this.root = this.activatedRoute.snapshot.data["root"];

        if (this.root == "modifica") {
            this.documentiService.icfsEdit = [];
            this.documentiService.GetICFSDocumento()?.subscribe({
                next: (data: any) => {
                    console.log(this.documentiService.icfsSelected);
                },
                error: (err: any) => console.log(err)
            });
        }
        this.documentiService.icfsSelected = [];

        this.docentiService.GetDocente().subscribe(isLoaded => {
            if (isLoaded) {
                const ruolo = this.docentiService.docente.Ruolo;

                if (ruolo != Ruolo.ADMIN && this.root == "crea") {
                    this.router.navigate(["404"]);
                } else {
                    this.stepsService.step = "ICF";
                }
            }
        });
    }

    SaveICF(icf: Icf) {
        if (this.documentiService.icfsSelected.findIndex((icfArray: Icf) => icfArray.Codice == icf.Codice) == -1) {
            this.documentiService.icfsSelected.push(new Icf(icf.Codice, icf.Descrizione));
            if (this.root == "modifica") {
                const indexICFEdit = this.documentiService.icfsEdit.findIndex((icfEdit: any) => icfEdit.Icf.Codice == icf.Codice);
                if (indexICFEdit != -1) {
                    this.documentiService.icfsEdit[indexICFEdit].Value = true;
                } else {
                    this.documentiService.icfsEdit.push({ Icf: new Icf(icf.Codice, icf.Descrizione), Value: true });
                }
            }
        }
        console.log(this.documentiService.icfsEdit);
    }

    RemoveICF(codice: string) {
        this.documentiService.icfsSelected.splice(this.documentiService.icfsSelected.findIndex(icf => icf.Codice == codice), 1);
        if (this.root == "modifica") {
            const indexICFEdit = this.documentiService.icfsEdit.findIndex((icfEdit: any) => icfEdit.Icf.Codice == codice);
            if (indexICFEdit != -1) {
                this.documentiService.icfsEdit.splice(indexICFEdit, 1);
            } else {
                this.documentiService.icfsEdit.push({ Icf: new Icf(codice), Value: false });
            }
        }
        console.log(this.documentiService.icfsEdit);
    }

    Edit(){
        if(this.documentiService.icfsEdit.length > 0){
            this.documentiService.UpdateICFsDocumento()?.subscribe({
                next: (data: any) => {
                    console.log("ICF modificati con successo");
                },
                error: (err: any) => this.checkError.checkError(err)
            });
        }

        this.router.navigate(["../"], { relativeTo: this.activatedRoute });
    }
}
