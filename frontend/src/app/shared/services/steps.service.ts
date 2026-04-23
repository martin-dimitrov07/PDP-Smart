import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class StepsService {
    private readonly router: Router = inject(Router);

    step: string = "studenti";

    GoStep(page: string) {
        this.router.navigate(["documenti", "crea", page]);
    }
}
