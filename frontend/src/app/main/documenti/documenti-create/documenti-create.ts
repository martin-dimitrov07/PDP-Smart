import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { StudentiService } from '../../../shared/services/studenti.service';
import { CheckError } from '../../../shared/utilities/check-error';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { StepBar } from './step-bar/step-bar';
import { Router } from '@angular/router';
import { DocentiService } from '../../../shared/services/docenti.service';
import { Ruolo } from '../../../models/docente';

@Component({
    selector: 'app-documenti-create',
    imports: [RouterOutlet, StepBar, RouterLinkWithHref],
    templateUrl: './documenti-create.html',
    styleUrl: './documenti-create.css',
})
export class DocumentiCreate {
    public readonly studentiService: StudentiService = inject(StudentiService);
    private readonly docentiService: DocentiService = inject(DocentiService);
    private readonly checkError: CheckError = inject(CheckError);
    private readonly router: Router = inject(Router);
    public avanzamento: String = "studenti";

    Avanzamento(tappa: String) {
        this.avanzamento = tappa;
    }

    ngOnInit() {
        if (this.docentiService.docente.Ruolo != Ruolo.ADMIN && this.docentiService.docente.Ruolo != Ruolo.COORDINATORE)
            this.router.navigate(["404"]);
        else {
            this.router.navigate(["documenti", "crea"]);

            this.studentiService.GetAnniScolastici().subscribe({
                next: (data: any) => {
                },
                error: (err: any) => this.checkError.checkError(err)
            });
        }
    }
}
