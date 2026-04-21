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

    SaveICFs(icfs: Icf[]){
        for (const icf of icfs) {
            this.documentiService.icfsSelected.push(icf);
        }   
    }   

    RemoveICF(codice: string){
        this.documentiService.icfsSelected.splice(this.documentiService.icfsSelected.findIndex(icf => icf.Codice == codice), 1);
    }
    
    GoStep(){
        this.documentiService.tappa = "allegati";
        this.documentiService.avanzamentoCrea = "allegati";

        this.router.navigate(["documenti", "crea", "allegati"]);
    }
}
