import { Component, inject } from '@angular/core';
import { DocumentiService } from '../../../../shared/services/documenti.service';

@Component({
    selector: 'app-documenti-header',
    imports: [],
    templateUrl: './documenti-header.html',
    styleUrl: './documenti-header.css',
})
export class DocumentiHeader {
    public readonly documentiService: DocumentiService = inject(DocumentiService);

}
