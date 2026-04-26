import { Component, EventEmitter, inject, Output } from '@angular/core';
import { DocumentiService } from '../../../../shared/services/documenti.service';

@Component({
    selector: 'app-documenti-header',
    imports: [],
    templateUrl: './documenti-header.html',
    styleUrl: './documenti-header.css',
})
export class DocumentiHeader {
    @Output() annoScolastico = new EventEmitter<Date>();
    
    public readonly documentiService: DocumentiService = inject(DocumentiService);

    SetFilterAnnoScolastico(annoScolastico: Date) {
        this.annoScolastico.emit(annoScolastico);
    }
}
