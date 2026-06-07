import { Component, inject } from '@angular/core';
import { CheckError } from '../../../shared/utilities/check-error';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { StepBar } from './step-bar/step-bar';
import { Router } from '@angular/router';
import { DocentiService } from '../../../shared/services/docenti.service';
import { Ruolo } from '../../../models/docente';
import { DocumentiCreateHeader } from './documenti-create-header/documenti-create-header';
import { IcfService } from '../../../shared/services/icf.service';
import { AllegatiService } from '../../../shared/services/allegati.service';
import { IndicatoriService } from '../../../shared/services/indicatori.service';

import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-documenti-create',
    imports: [RouterOutlet, StepBar, DocumentiCreateHeader],
    templateUrl: './documenti-create.html',
    styleUrl: './documenti-create.css',
})
export class DocumentiCreate {
    private readonly indicatoriService: IndicatoriService = inject(IndicatoriService);
    private readonly icfService: IcfService = inject(IcfService);
    private readonly allegatiService: AllegatiService = inject(AllegatiService);
    private readonly docentiService: DocentiService = inject(DocentiService);
    private readonly checkError: CheckError = inject(CheckError);
    private readonly router: Router = inject(Router);
    private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

    private readonly platformId = inject(PLATFORM_ID);

    ngOnInit() {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        this.indicatoriService.indicatori = {};
        this.icfService.icfsSelected = [];
        this.allegatiService.allegati = [];


        const ruolo = this.docentiService.docente?.Ruolo;

        if (ruolo != Ruolo.ADMIN && ruolo != Ruolo.COORDINATORE) {
            this.router.navigate(["documenti/lista"]);
            return;
        }

        if (ruolo == Ruolo.ADMIN) {
            this.router.navigate(['studenti'], { relativeTo: this.activatedRoute });
            return;
        }

        this.docentiService.isCoordinatoreClassiNoDocNoEmpty().subscribe({
            next: (isEnabled) => {
                if (!isEnabled) {
                    this.router.navigate(["documenti/lista"]);
                    return;
                }

                this.router.navigate(['studenti'], { relativeTo: this.activatedRoute });

            },
            error: (err) => this.checkError.checkError(err)
        });
    }
}
