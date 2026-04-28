import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DocumentiService } from '../../../../../../shared/services/documenti.service';

@Component({
    selector: 'app-modal-add-nota',
    imports: [FormsModule],
    templateUrl: './modal-add-nota.html',
    styleUrl: './modal-add-nota.css',
})
export class ModalAddNota {
    public readonly documentiService: DocumentiService = inject(DocumentiService);

    ResetNota() {
        this.documentiService.indicatoreSelected.nota = "";
    }
}
