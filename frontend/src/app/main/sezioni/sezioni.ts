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
    public readonly studentiService: StudentiService = inject(StudentiService);

    ngOnInit() {
        this.studentiService.GetSections().subscribe({
            next: data => {
                console.log(data);
            },
            error: err => {
                console.error(err.status + ": " + err.error);
            }
        })
    }

    SetSezione(section: string) {
        // sectionId = this.sezioniDocente.find(sezione => sezione.nome == section).id;

        // this.studentiService.sezioneSelected = sectionId;
    }
}
