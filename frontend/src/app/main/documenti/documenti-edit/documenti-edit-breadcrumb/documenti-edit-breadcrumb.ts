import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-documenti-edit-breadcrumb',
  imports: [],
  templateUrl: './documenti-edit-breadcrumb.html',
  styleUrl: './documenti-edit-breadcrumb.css',
})
export class DocumentiEditBreadcrumb {
    @Input() currentRoute: string = "";
}
