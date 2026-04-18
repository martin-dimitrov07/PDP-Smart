import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-step-bar',
    imports: [],
    templateUrl: './step-bar.html',
    styleUrl: './step-bar.css',
})
export class StepBar {
    private _route: any;
    private readonly router = inject(Router);

    @Input() set route(value: any) {
        this._route = value;
    }

    get route(): any {
        return this._route;
    }

    GoPage(page: string) {
        console.log('Navigating to:', page);
        if (this.route === 'studenti' || this.route === 'materie' || this.route === 'indicatori' || this.route === 'conferma') {
            this.router.navigate(['documenti', 'crea', page]);
        }
    }
}
