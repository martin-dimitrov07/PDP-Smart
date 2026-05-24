import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DocumentiService } from '../../../../../shared/services/documenti.service';
import { ActivatedRoute } from '@angular/router';
import { Stato } from '../../../../../models/documento';
import { IndicatoriService } from '../../../../../shared/services/indicatori.service';

@Component({
    selector: 'app-modal-add-nota',
    imports: [FormsModule],
    templateUrl: './modal-add-nota.html',
    styleUrl: './modal-add-nota.css',
})
export class ModalAddNota {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    public readonly indicatoriService: IndicatoriService = inject(IndicatoriService);
    public readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

    StatoDocumento: typeof Stato = Stato;

    EditNota(){
        if(this.activatedRoute.snapshot.data['root'] == "modifica") {
            const indexEdit = this.indicatoriService.indicatoriEdit.findIndex((item: any) => item.Id == this.indicatoriService.indicatoreSelected.Id && item.Materia == this.indicatoriService.indicatoreSelected.Materia);
            if (indexEdit !== -1) {
                this.indicatoriService.indicatoriEdit[indexEdit].Nota = this.indicatoriService.indicatoreSelected.Nota;
            }
            else
            {
                this.indicatoriService.indicatoriEdit.push({
                    Id: this.indicatoriService.indicatoreSelected.Id,
                    Materia: this.indicatoriService.indicatoreSelected.Materia,
                    Nota: this.indicatoriService.indicatoreSelected.Nota,
                    Value: true
                });
            }
        }
    }
}
