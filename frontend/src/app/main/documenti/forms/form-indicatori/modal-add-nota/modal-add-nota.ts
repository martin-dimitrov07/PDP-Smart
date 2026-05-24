import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DocumentiService } from '../../../../../shared/services/documenti.service';
import { ActivatedRoute } from '@angular/router';
import { Stato } from '../../../../../models/documento';

@Component({
    selector: 'app-modal-add-nota',
    imports: [FormsModule],
    templateUrl: './modal-add-nota.html',
    styleUrl: './modal-add-nota.css',
})
export class ModalAddNota {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    public readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

    StatoDocumento: typeof Stato = Stato;
    // ResetNota() {
    //     this.documentiService.indicatoreSelected.Nota = "";
    // }

    EditNota(){
        if(this.activatedRoute.snapshot.data['root'] == "modifica") {
            const indexEdit = this.documentiService.indicatoriEdit.findIndex((item: any) => item.Id === this.documentiService.indicatoreSelected.Id && item.Materia === this.documentiService.indicatoreSelected.Materia);
            if (indexEdit !== -1) {
                this.documentiService.indicatoriEdit[indexEdit].Nota = this.documentiService.indicatoreSelected.Nota;
            }
            else
            {
                this.documentiService.indicatoriEdit.push({
                    Id: this.documentiService.indicatoreSelected.Id,
                    Materia: this.documentiService.indicatoreSelected.Materia,
                    Nota: this.documentiService.indicatoreSelected.Nota,
                    Value: true
                });
            }
        }
    }
}
