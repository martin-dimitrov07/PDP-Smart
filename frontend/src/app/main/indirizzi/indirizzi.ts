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
                if (err.status == 401)
                {
                    console.error(err);
                    this.router.navigate(["/login"]);
                }
                else
                    console.error(err.status + ": " + err.error);
            }
        })
    }

    SetSezione(section: string) {
        // sectionId = this.sezioniDocente.find(sezione => sezione.nome == section).id;

        // this.studentiService.sezioneSelected = sectionId;
    }
}
