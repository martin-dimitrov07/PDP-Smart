import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-documenti-edit-header',
  imports: [],
  templateUrl: './documenti-edit-header.html',
  styleUrl: './documenti-edit-header.css',
})
export class DocumentiEditHeader {
    @Input() studenteEmail: string = "";
    @Input() annoScolastico: string = "";
}
