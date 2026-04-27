import { Component, inject } from '@angular/core';
import { DocumentiService } from '../../../../../shared/services/documenti.service';
import { ModalAddIcf } from './modal-add-icf/modal-add-icf';
import { Icf } from '../../../../../models/icf';
import { Router } from '@angular/router';
import { StepsService } from '../../../../../shared/services/steps.service';

@Component({
    selector: 'app-form-icf',
    imports: [ModalAddIcf],
    templateUrl: './form-icf.html',
    styleUrl: './form-icf.css',
})
export class FormICF {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    public readonly stepsService: StepsService = inject(StepsService);

    prevPage: string = "";

    ngOnInit(){
        this.stepsService.step = "ICF";
    }

    SaveICF(icf: Icf){
        if(this.documentiService.icfsSelected.findIndex((icfArray: Icf) => icfArray.Codice == icf.Codice) == -1) {
            this.documentiService.icfsSelected.push(new Icf(icf.Codice, icf.Descrizione));
        }
    }   

    RemoveICF(codice: string){
        this.documentiService.icfsSelected.splice(this.documentiService.icfsSelected.findIndex(icf => icf.Codice == codice), 1);
    }
}
