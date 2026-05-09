import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { StudentiService } from '../../../shared/services/studenti.service';
import { CheckError } from '../../../shared/utilities/check-error';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { StepBar } from './step-bar/step-bar';
import { Router } from '@angular/router';
import { DocentiService } from '../../../shared/services/docenti.service';
import { Docente, Ruolo } from '../../../models/docente';
import { DocumentiCreateHeader } from './documenti-create-header/documenti-create-header';
import e from 'express';
import { Documento } from '../../../models/documento';

@Component({
    selector: 'app-documenti-create',
    imports: [RouterOutlet, StepBar, DocumentiCreateHeader],
    templateUrl: './documenti-create.html',
    styleUrl: './documenti-create.css',
})
export class DocumentiCreate {
    private readonly studentiService: StudentiService = inject(StudentiService);
    private readonly docentiService: DocentiService = inject(DocentiService);
    private readonly checkError: CheckError = inject(CheckError);
    private readonly router: Router = inject(Router);
    private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

    ngOnInit() {
        this.router.navigate(['studenti'], { relativeTo: this.activatedRoute });

        this.docentiService.GetDocente().subscribe(isLoaded => {
            if (isLoaded) {
                const ruolo = this.docentiService.docente.Ruolo;

                if (ruolo != Ruolo.ADMIN && ruolo != Ruolo.COORDINATORE) {
                    this.router.navigate(["404"]);
                    return;
                } 
                
                if (ruolo == Ruolo.COORDINATORE) {
                    this.studentiService.GetClassiNoDocEmptyCoordinatore(Documento.SetAnnoCorrect(new Date())).subscribe({
                        next: (data: any) => {
                            const hasStudents = Object.values(data).some((arr: any) => arr && arr.length > 0);

                            if (!hasStudents) {
                                this.router.navigate(["404"]);
                                return;
                            }

                            this.studentiService.GetAnniScolastici().subscribe({
                                error: (err: any) => this.checkError.checkError(err)
                            });
                        },
                        error: (err: any) => this.checkError.checkError(err)
                    });
                }
                else {
                    this.studentiService.GetAnniScolastici().subscribe({
                        error: (err: any) => this.checkError.checkError(err)
                    });
                }
            }
        });
    }
}
