import { Component, inject } from '@angular/core';
import { StudentiService } from '../../shared/services/studenti.service';
import { Router } from '@angular/router';
import { CheckError } from '../../shared/utilities/check-error';

@Component({
    selector: 'app-indirizzi',
    imports: [],
    templateUrl: './indirizzi.html',
    styleUrl: './indirizzi.css',
})
export class Indirizzi {
    public readonly studentiService: StudentiService = inject(StudentiService);
    private readonly checkError: CheckError = inject(CheckError);
    private readonly router: Router = inject(Router);

    ngOnInit() {
        this.studentiService.GetIndirizzi().subscribe({
            next: (data: any) => { },
            error: (err: any) => this.checkError.checkError(err)
        });
    }

    GoClassi(indirizzo: string) {
        this.studentiService.indirizzoSelected = indirizzo;

        this.router.navigate(["indirizzi", indirizzo, "classi"]);
    }
}
