import { Component } from '@angular/core';
import { DocumentiOptionCard } from './documenti-option-card/documenti-option-card';
import { DocumentiCard } from './documenti-list/documenti-card/documenti-card';

@Component({
  selector: 'app-documenti',
  imports: [DocumentiOptionCard, DocumentiCard],
  templateUrl: './documenti.html',
  styleUrl: './documenti.css',
})
export class Documenti {

}
