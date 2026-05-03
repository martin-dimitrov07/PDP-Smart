import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documenti-edit-breadcrumb',
  imports: [],
  templateUrl: './documenti-edit-breadcrumb.html',
  styleUrl: './documenti-edit-breadcrumb.css',
})
export class DocumentiEditBreadcrumb {
    @Input() currentRoute: string = "";
    @Input() studenteEmail: string = "";
    @Input() annoScolastico: string = "";

    private readonly router: Router = inject(Router);

    GoBack() {
        return "/documenti/modifica/" + this.studenteEmail + "/" +  encodeURIComponent(this.annoScolastico);
    }
}
