import { Component, ElementRef, inject, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';
import { DocumentiService } from '../../../../../shared/services/documenti.service';
import { AllegatiService } from '../../../../../shared/services/allegati.service';

@Component({
    selector: 'app-modal-error',
    imports: [],
    templateUrl: './modal-error.html',
    styleUrl: './modal-error.css',
})
export class ModalError {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    public readonly allegatiService: AllegatiService = inject(AllegatiService);
}
