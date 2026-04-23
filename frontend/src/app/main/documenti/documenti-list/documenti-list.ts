import { Component } from '@angular/core';
import { DocumentiCard } from "./documenti-card/documenti-card";
import { DocumentiHeader } from "./documenti-header/documenti-header";

@Component({
  selector: 'app-documenti-list',
  imports: [DocumentiCard, DocumentiHeader],
  templateUrl: './documenti-list.html',
  styleUrl: './documenti-list.css',
})
export class DocumentiList {

}
