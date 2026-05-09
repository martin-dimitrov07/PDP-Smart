import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoriaInd } from './categoria-ind/categoria-ind';
import { CommonModule, } from "@angular/common";
import { ModalAddNota } from './modal-add-nota/modal-add-nota';
import { DocumentiService } from '../../../../shared/services/documenti.service';
import { StepsService } from '../../../../shared/services/steps.service';
import { CheckError } from '../../../../shared/utilities/check-error';
import { DocentiService } from '../../../../shared/services/docenti.service';
import { Ruolo } from '../../../../models/docente';
import { ActivatedRoute } from '@angular/router';
import { DocumentiEditBreadcrumb } from '../../documenti-edit/documenti-edit-breadcrumb/documenti-edit-breadcrumb';
import { StudentiService } from '../../../../shared/services/studenti.service';
import { Classe } from '../../../../models/classe';
import { Router } from '@angular/router';
import { Stato } from '../../../../models/documento';


@Component({
    selector: 'app-form-indicatori',
    imports: [FormsModule, CategoriaInd, CommonModule, ModalAddNota, DocumentiEditBreadcrumb],
    templateUrl: './form-indicatori.html',
    styleUrl: './form-indicatori.css',
})
export class FormIndicatori {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    private readonly studentiService: StudentiService = inject(StudentiService);
    public readonly stepsService: StepsService = inject(StepsService);
    private readonly checkError: CheckError = inject(CheckError);
    private readonly router: Router = inject(Router);

    public readonly docentiService: DocentiService = inject(DocentiService);
    Ruolo: typeof Ruolo = Ruolo;
    StatoDocumento: typeof Stato = Stato;

    datiCaricati: boolean = false;

    private readonly cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

    public readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

    ngOnInit() {
        this.stepsService.step = "indicatori";

        if (this.activatedRoute.snapshot.data['root'] == "modifica") {
            this.documentiService.indicatoriEdit = [];

            const annoScolastico = new Date(this.activatedRoute.snapshot.paramMap.get('annoScolastico')!.split("-")[0] + "-09-01");

            this.studentiService.GetClasseStudente(this.activatedRoute.snapshot.paramMap.get('studenteEmail')!.replaceAll('_', '.'), annoScolastico).subscribe({
                next: (classe: Classe) => {
                    this.documentiService.classeSelected = classe;

                    this.documentiService.GetMaterieClasse().subscribe({
                        next: (data) => {
                            this.documentiService.GetCategorieIndicatore().subscribe({
                                next: (data) => {
                                    this.datiCaricati = false;
                                    // Forziamo Angular a capire che c'è stato un cambiamento
                                    this.cdr.detectChanges();

                                    // console.log(this.documentiService.indicatori.object);

                                    this.documentiService.InitializeIndicatori();
                                    this.documentiService.SetIndicatori();

                                    console.log(this.documentiService.indicatori);

                                    this.datiCaricati = true;
                                    this.cdr.detectChanges();
                                },
                                error: (err) => this.checkError.checkError(err)
                            });
                        },
                        error: (err) => this.checkError.checkError(err)
                    })
                }
            });
        }
        else {
            this.documentiService.GetMaterieClasse().subscribe({
                next: (data) => {
                    this.documentiService.GetCategorieIndicatore().subscribe({
                        next: (data) => {
                            this.datiCaricati = false;
                            // Forziamo Angular a capire che c'è stato un cambiamento
                            this.cdr.detectChanges();

                            // console.log(this.documentiService.indicatori.object);

                            if (Object.keys(this.documentiService.indicatori).length == 0) {
                                this.documentiService.InitializeIndicatori();
                            }

                            // console.log(this.documentiService.indicatori);

                            this.datiCaricati = true;
                            this.cdr.detectChanges();
                        },
                        error: (err) => this.checkError.checkError(err)
                    });
                },
                error: (err) => this.checkError.checkError(err)
            })
        }

        this.documentiService.GetMaterieDocente().subscribe({
            next: (data) => { },
            error: (err) => this.checkError.checkError(err)
        })
    }

    Edit() {
        // console.log(this.documentiService.indicatoriEdit);
        if (this.documentiService.indicatoriEdit.length > 0) {
            this.documentiService.UpdateIndicatoriDocumento()?.subscribe({
                next: (data: any) => {
                    console.log("Indicatori modificati con successo");
                },
                error: (err: any) => this.checkError.checkError(err)
            });
        }

        this.router.navigate(["../"], { relativeTo: this.activatedRoute });
    }
}
