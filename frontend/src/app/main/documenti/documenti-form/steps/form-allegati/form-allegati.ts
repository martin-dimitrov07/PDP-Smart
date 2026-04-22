import { Component, inject } from '@angular/core';
import { DocumentiService } from '../../../../../shared/services/documenti.service';

@Component({
  selector: 'app-form-allegati',
  imports: [],
  templateUrl: './form-allegati.html',
  styleUrl: './form-allegati.css',
})
export class FormAllegati {
    public readonly documentiService: DocumentiService = inject(DocumentiService);

    ngOnInit() {
        this.documentiService.step = "allegati";
    }
}
