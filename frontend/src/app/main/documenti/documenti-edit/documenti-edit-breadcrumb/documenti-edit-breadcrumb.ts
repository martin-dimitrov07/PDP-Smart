import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-documenti-edit-breadcrumb',
  imports: [RouterLink],
  templateUrl: './documenti-edit-breadcrumb.html',
  styleUrl: './documenti-edit-breadcrumb.css',
})
export class DocumentiEditBreadcrumb {
    @Input() currentRoute: string = "";
    // @Input() studenteEmail: string = "";
    // @Input() annoScolastico: string = "";

    private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    private readonly router: Router = inject(Router);

    GoBack() {
        return ["/documenti", "modifica", this.activatedRoute.snapshot.paramMap.get('studenteEmail')!, this.activatedRoute.snapshot.paramMap.get('annoScolastico')!];
    }
}
