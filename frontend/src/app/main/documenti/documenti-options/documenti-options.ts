import { Component, inject } from '@angular/core';
import { DocumentiOptionCard } from './documenti-option-card/documenti-option-card';
import { DocentiService } from '../../../shared/services/docenti.service';
import { Ruolo } from '../../../models/docente';
import { Router } from '@angular/router';
import { StudentiService } from '../../../shared/services/studenti.service';
import { Documento } from '../../../models/documento';
import e from 'express';
import { ClassiService } from '../../../shared/services/classi.service';
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
    private readonly studentiService: StudentiService = inject(StudentiService);
    private readonly classiService: ClassiService = inject(ClassiService);

    ngOnInit() {
        this.docentiService.GetDocente().subscribe(isLoaded => {
            if (isLoaded) {
                const ruolo = this.docentiService.docente.Ruolo;

                if (ruolo != Ruolo.ADMIN && ruolo != Ruolo.COORDINATORE) {
                    this.router.navigate(["404"]);
                }
                else {
                    if (this.docentiService.docente.Ruolo == Ruolo.COORDINATORE) {
                        this.classiService.GetClassiNoDocNoEmpty(Documento.SetAnnoCorrect(new Date())).subscribe({
                            next: (data: any) => {
                                console.log(data);
                                const hasStudents = Object.values(data).some((arr: any) => arr && arr.length > 0);

                                if (hasStudents) {
                                    this.isClassiEnabled = true;
                                } else {
                                    this.isClassiEnabled = false;
                                }
                            },
                            error: (err: any) => console.log(err)
                        });
                    }
                    else
                        this.isClassiEnabled = true;
                }
            }
        });
    }
}
