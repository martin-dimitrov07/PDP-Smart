import { Component, inject } from '@angular/core';
import { DocumentiService } from '../../../../shared/services/documenti.service';

@Component({
    selector: 'app-modal-delete-documento',
    imports: [],
    templateUrl: './modal-delete-documento.html',
    styleUrl: './modal-delete-documento.css',
})
export class ModalDeleteDocumento {
    private readonly documentiService: DocumentiService = inject(DocumentiService);

    DeleteDocumento() {
        if (!this.documentiService.documentoSelected) return;
        this.documentiService.DeleteDocumento(this.documentiService.documentoSelected);
    }
}
