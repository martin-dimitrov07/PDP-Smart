import { Component, inject } from '@angular/core';
import { DocumentiService } from '../../../../../shared/services/documenti.service';
import { StepsService } from '../../../../../shared/services/steps.service';

@Component({
  selector: 'app-form-allegati',
  imports: [],
  templateUrl: './form-allegati.html',
  styleUrl: './form-allegati.css',
})
export class FormAllegati {
    // public readonly documentiService: DocumentiService = inject(DocumentiService);
    public readonly stepsService: StepsService = inject(StepsService);

    ngOnInit() {
        this.stepsService.step = "allegati";
    }
}
