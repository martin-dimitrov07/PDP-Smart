import { Component, inject } from '@angular/core';
import { DocumentiOptionCard } from './documenti-option-card/documenti-option-card';
import { DocentiService } from '../../../shared/services/docenti.service';
import { Ruolo } from '../../../models/docente';
import { Router } from '@angular/router';
import { StudentiService } from '../../../shared/services/studenti.service';
import { Documento } from '../../../models/documento';
import e from 'express';
import { ClassiService } from '../../../shared/services/classi.service';
import { CheckError } from '../../../shared/utilities/check-error';
@Component({
    selector: 'app-documenti-options',
    imports: [DocumentiOptionCard],
    templateUrl: './documenti-options.html',
    styleUrl: './documenti-options.css',
})
export class DocumentiOptions {
    private readonly docentiService: DocentiService = inject(DocentiService);
    private readonly router: Router = inject(Router);
    public isClassiEnabled: boolean = false;
    private readonly classiService: ClassiService = inject(ClassiService);
    private readonly checkError: CheckError = inject(CheckError);

    ngOnInit() {
        const ruolo = this.docentiService.docente?.Ruolo;

        if (ruolo != Ruolo.ADMIN && ruolo != Ruolo.COORDINATORE) {
            this.router.navigate(["documenti/lista"]);
            return;
        }

        if (ruolo == Ruolo.ADMIN) {
            this.isClassiEnabled = true;
            return;
        }

        this.docentiService.isCoordinatoreClassiNoDocNoEmpty().subscribe({
            next: (isEnabled) => {
                this.isClassiEnabled = isEnabled;
            },
            error: (err) => this.checkError.checkError(err)
        });
    }
}
