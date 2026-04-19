import { Component, inject } from '@angular/core';
import { DocumentiService } from '../../../../../shared/services/documenti.service';

@Component({
    selector: 'app-form-icf',
    imports: [],
    templateUrl: './form-icf.html',
    styleUrl: './form-icf.css',
})
export class FormICF {
    public readonly documentiService: DocumentiService = inject(DocumentiService);

    ngOnInit() {
        this.documentiService.tappa = "ICF";
        this.documentiService.avanzamentoCrea = "ICF";
    }
}
