import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-documenti-edit-header',
  imports: [RouterLink],
  templateUrl: './documenti-edit-header.html',
  styleUrl: './documenti-edit-header.css',
})
export class DocumentiEditHeader {
    @Input() studenteEmail: string = "";
    @Input() annoScolastico: string = "";
}
