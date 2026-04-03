import { Component, inject } from '@angular/core';
import { StudentiService } from '../../shared/services/studenti.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-indirizzi',
    imports: [],
    templateUrl: './indirizzi.html',
    styleUrl: './indirizzi.css',
})
export class Indirizzi {
    public readonly studentiService: StudentiService = inject(StudentiService);
    
    private readonly router: Router = inject(Router);

    ngOnInit() {
        this.studentiService.GetIndirizzi();
    }

    GoClassi(indirizzo: string) {
        this.studentiService.indirizzoSelected = indirizzo;

        this.router.navigate(["indirizzi", indirizzo, "classi"]);
    }
}
