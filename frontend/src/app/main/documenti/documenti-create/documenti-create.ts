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
import { ClassiService } from '../../../shared/services/classi.service';
import { AnniScolasticiService } from '../../../shared/services/anni-scolastici.service';
import { IcfService } from '../../../shared/services/icf.service';
import { AllegatiService } from '../../../shared/services/allegati.service';
import { IndicatoriService } from '../../../shared/services/indicatori.service';

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
    private readonly anniScolasticiService: AnniScolasticiService = inject(AnniScolasticiService);
    private readonly classiService: ClassiService = inject(ClassiService);
    private readonly docentiService: DocentiService = inject(DocentiService);
    private readonly checkError: CheckError = inject(CheckError);
    private readonly router: Router = inject(Router);
    private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

    ngOnInit() {
        this.router.navigate(['studenti'], { relativeTo: this.activatedRoute });

        this.indicatoriService.indicatori = {};
        this.icfService.icfsSelected = [];
        this.allegatiService.allegati = [];

        this.classiService.GetClassiNoDocNoEmpty(Documento.SetAnnoCorrect(new Date())).subscribe({
            next: (data: any) => {
                const hasStudents = Object.values(data).some((arr: any) => arr && arr.length > 0);

                if (!hasStudents) {
                    this.router.navigate(["404"]);
                    return;
                }

                this.anniScolasticiService.GetAnniScolasticiStudenti().subscribe({
                    error: (err: any) => this.checkError.checkError(err)
                });
            },
            error: (err: any) => this.checkError.checkError(err)
        });

        // this.docentiService.GetDocente().subscribe(isLoaded => {
        //     if (isLoaded) {
        //         const ruolo = this.docentiService.docente.Ruolo;

        //         if (ruolo != Ruolo.ADMIN && ruolo != Ruolo.COORDINATORE) {
        //             this.router.navigate(["404"]);
        //             return;
        //         }

        //         if (ruolo == Ruolo.COORDINATORE) {
        //             this.classiService.GetClassiNoDocNoEmptyCoordinatore(Documento.SetAnnoCorrect(new Date())).subscribe({
        //                 next: (data: any) => {
        //                     const hasStudents = Object.values(data).some((arr: any) => arr && arr.length > 0);

        //                     if (!hasStudents) {
        //                         this.router.navigate(["404"]);
        //                         return;
        //                     }

        //                     this.anniScolasticiService.GetAnniScolasticiStudenti().subscribe({
        //                         error: (err: any) => this.checkError.checkError(err)
        //                     });
        //                 },
        //                 error: (err: any) => this.checkError.checkError(err)
        //             });
        //         }
        //         else {
        //             this.anniScolasticiService.GetAnniScolasticiStudenti().subscribe({
        //                 error: (err: any) => this.checkError.checkError(err)
        //             });
        //         }
        //     }
        // });
    }
}
