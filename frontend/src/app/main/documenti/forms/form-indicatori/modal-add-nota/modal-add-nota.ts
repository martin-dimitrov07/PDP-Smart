import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DocumentiService } from '../../../../../shared/services/documenti.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-modal-add-nota',
    imports: [FormsModule],
    templateUrl: './modal-add-nota.html',
    styleUrl: './modal-add-nota.css',
})
export class ModalAddNota {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    public readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

    // ResetNota() {
    //     this.documentiService.indicatoreSelected.Nota = "";
    // }

    EditNota(){
        if(this.activatedRoute.snapshot.data['root'] == "modifica") {
            const indexEdit = this.documentiService.indicatoriEdit.findIndex((item: any) => item.Id === this.documentiService.indicatoreSelectedEdit.Id && item.Materia === this.documentiService.indicatoreSelectedEdit.Materia);
            if (indexEdit !== -1) {
                this.documentiService.indicatoriEdit[indexEdit].Nota = this.documentiService.indicatoreSelected.Nota;
            }
            else
            {
                this.documentiService.indicatoriEdit.push({
                    Id: this.documentiService.indicatoreSelectedEdit.Id,
                    Materia: this.documentiService.indicatoreSelectedEdit.Materia,
                    Nota: this.documentiService.indicatoreSelected.Nota,
                    Value: true
                });
            }
        }
    }
}
