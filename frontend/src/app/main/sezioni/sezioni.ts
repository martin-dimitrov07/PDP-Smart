import { Component, inject } from '@angular/core';
import { StudentiService } from '../../shared/services/studenti.service';
import { LoginService } from '../../shared/services/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sezioni',
    imports: [],
    templateUrl: './sezioni.html',
    styleUrl: './sezioni.css',
})
export class Sezioni {
    private studentiService: StudentiService = inject(StudentiService);
    
    private router: Router = inject(Router);

    sezioniDocente: string[] = [];

    ngOnInit() {
        this.studentiService.GetSections().subscribe({
            next: data => {
                console.log(data);
                this.sezioniDocente = this.studentiService.sezioni;
            },
            error: err => {
                if (err.status == 403)
                    this.router.navigate(["/login"]);
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
