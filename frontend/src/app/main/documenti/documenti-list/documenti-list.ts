import { Component } from '@angular/core';
import { DocumentiCard } from "./documenti-card/documenti-card";
import { DocumentiHeader } from "./documenti-header/documenti-header";
import { DocumentiFilters } from "./documenti-filters/documenti-filters";

@Component({
  selector: 'app-documenti-list',
  imports: [DocumentiCard, DocumentiHeader, DocumentiFilters],
  templateUrl: './documenti-list.html',
  styleUrl: './documenti-list.css',
})
export class DocumentiList {

}
