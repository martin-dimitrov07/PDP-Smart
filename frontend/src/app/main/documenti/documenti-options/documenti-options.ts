import { Component, inject } from '@angular/core';
import { DocumentiOptionCard } from './documenti-option-card/documenti-option-card';
import { DocentiService } from '../../../shared/services/docenti.service';
import { Ruolo } from '../../../models/docente';
import { Router } from '@angular/router';
@Component({
  selector: 'app-documenti-options',
  imports: [DocumentiOptionCard],
  templateUrl: './documenti-options.html',
  styleUrl: './documenti-options.css',
})
export class DocumentiOptions {
    private readonly docentiService: DocentiService = inject(DocentiService);
    private readonly router: Router = inject(Router);

    ngOnInit(){
        if(this.docentiService.docente.Ruolo != Ruolo.ADMIN && this.docentiService.docente.Ruolo != Ruolo.COORDINATORE){
            this.router.navigate(["404"]);
        }
    }
}
