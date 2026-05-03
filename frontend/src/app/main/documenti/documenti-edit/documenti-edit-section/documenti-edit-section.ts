import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-documenti-edit-section',
    imports: [],
    templateUrl: './documenti-edit-section.html',
    styleUrl: './documenti-edit-section.css',
})
export class DocumentiEditSection {
    @Input() title: string = "";
    @Input() icon: string = "";
    @Input() description: string = "";
    @Input() route: string = "";

    private readonly router: Router = inject(Router);
    private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

    navigateToRoute(){

        this.router.navigate([this.route], { relativeTo: this.activatedRoute });
    }
}
