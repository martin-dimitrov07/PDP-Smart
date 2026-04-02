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
        this.studentiService.GetIndirizzi().subscribe({
            next: data => {
                console.log(data);
            },
            error: err => {
                // console.error("Errore in indirizzi.ts");
                console.error(err.status + ": " + err.error);
            }
        })
    }

    GoClassi(indirizzo: string) {
        this.studentiService.indirizzoSelected = indirizzo;

        this.router.navigate(["indirizzi", indirizzo, "classi"]);
    }
}
