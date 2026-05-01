import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

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

    private router: Router = inject(Router);

    navigateToRoute(){
        this.router.navigate(["documenti", "modifica", this.route]);
    }
}
