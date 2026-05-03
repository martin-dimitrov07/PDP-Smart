import { Component, inject } from '@angular/core';
import { ModalAddIcf } from './modal-add-icf/modal-add-icf';
import { DocumentiService } from '../../../../shared/services/documenti.service';
import { StepsService } from '../../../../shared/services/steps.service';
import { Icf } from '../../../../models/icf';
import { Ruolo } from '../../../../models/docente';
import { ActivatedRoute, Router } from '@angular/router';
import { DocentiService } from '../../../../shared/services/docenti.service';
import { DocumentiEditBreadcrumb } from '../../documenti-edit/documenti-edit-breadcrumb/documenti-edit-breadcrumb';

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

    Ruolo: typeof Ruolo = Ruolo;

    prevPage: string = "";

    ngOnInit() {
        const root = this.activatedRoute.snapshot.data["root"];

        this.docentiService.GetDocente().subscribe(isLoaded => {
            if (isLoaded) {
                const ruolo = this.docentiService.docente.Ruolo;

                if (ruolo != Ruolo.ADMIN && root == "crea") {
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
        }
    }

    RemoveICF(codice: string) {
        this.documentiService.icfsSelected.splice(this.documentiService.icfsSelected.findIndex(icf => icf.Codice == codice), 1);
    }
}
