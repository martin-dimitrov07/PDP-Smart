import { Component, inject } from '@angular/core';
import { DocumentiService } from '../../../../../shared/services/documenti.service';
import { ModalAddIcf } from './modal-add-icf/modal-add-icf';
import { Icf } from '../../../../../models/icf';
import { Router } from '@angular/router';

@Component({
    selector: 'app-form-icf',
    imports: [ModalAddIcf],
    templateUrl: './form-icf.html',
    styleUrl: './form-icf.css',
})
export class FormICF {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    private readonly router: Router = inject(Router);

    prevPage: string = "";

    ngOnInit(){
        this.documentiService.step = "ICF";
    }

    SaveICF(icf: Icf){
        if(this.documentiService.icfsSelected.findIndex((icfArray: Icf) => icfArray.Codice == icf.Codice) == -1) {
            this.documentiService.icfsSelected.push(new Icf(icf.Codice, icf.Descrizione));
        }
    }   

    RemoveICF(codice: string){
        this.documentiService.icfsSelected.splice(this.documentiService.icfsSelected.findIndex(icf => icf.Codice == codice), 1);
    }
    
    SetPrevPage(){
        if(this.documentiService.materieSelected.length > 0){
            this.prevPage = "indicatori";
        }
        else
            this.prevPage = "materie";

        this.GoStep(this.prevPage);
    }

    GoStep(page: string){
        this.router.navigate(["documenti", "crea", page]);
    }
}
