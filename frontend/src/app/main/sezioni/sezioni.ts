import { Component, inject } from '@angular/core';
import { StudentiService } from '../../shared/services/studenti.service';

@Component({
  selector: 'app-sezioni',
  imports: [],
  templateUrl: './sezioni.html',
  styleUrl: './sezioni.css',
})
export class Sezioni {
    private studentiService: StudentiService = inject(StudentiService);

    sezioniDocente = [];

    ngOnInit(){
        this.sezioniDocente = this.studentiService.sezioniDoc;
    }

    SetSezione(section: string)
    {
        // sectionId = this.sezioniDocente.find(sezione => sezione.nome == section).id;

        // this.studentiService.sezioneSelected = sectionId;
    }
}
