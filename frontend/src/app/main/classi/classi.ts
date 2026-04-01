import { Component, inject } from '@angular/core';
import { StudentiService } from '../../shared/services/studenti.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-classi',
    imports: [],
    templateUrl: './classi.html',
    styleUrl: './classi.css',
})
export class Classi {
    public readonly studentiService: StudentiService = inject(StudentiService);

    private readonly router: Router = inject(Router);

    ngOnInit() {
        if (this.studentiService.indirizzoSelected) {
            this.studentiService.GetClassi().subscribe({
                next: data => {
                    console.log(data);
                },
                error: err => {
                    if (err.status == 401) {
                        console.error(err);
                        this.router.navigate(["login"]);
                    }
                    else
                        console.error(err.status + ": " + err.error);
                }
            })
        }
        else
            this.router.navigate(["indirizzi"]);
    }
}
