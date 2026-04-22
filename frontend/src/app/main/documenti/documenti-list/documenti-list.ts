import { Component } from '@angular/core';
import { DocumentiCard } from "./documenti-card/documenti-card";

@Component({
  selector: 'app-documenti-list',
  imports: [DocumentiCard],
  templateUrl: './documenti-list.html',
  styleUrl: './documenti-list.css',
})
export class DocumentiList {

}
