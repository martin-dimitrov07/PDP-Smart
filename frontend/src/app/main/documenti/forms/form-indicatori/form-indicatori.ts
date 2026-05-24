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
import { ClassiService } from '../../../../shared/services/classi.service';
import { MaterieService } from '../../../../shared/services/materie.service';
import { IndicatoriService } from '../../../../shared/services/indicatori.service';


@Component({
    selector: 'app-form-indicatori',
    imports: [FormsModule, CategoriaInd, CommonModule, ModalAddNota, DocumentiEditBreadcrumb],
    templateUrl: './form-indicatori.html',
    styleUrl: './form-indicatori.css',
})
export class FormIndicatori {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    private readonly materieService: MaterieService = inject(MaterieService);
    private readonly classiService: ClassiService = inject(ClassiService);
    public readonly stepsService: StepsService = inject(StepsService);
    private readonly checkError: CheckError = inject(CheckError);
    public readonly docentiService: DocentiService = inject(DocentiService);
    public readonly indicatoriService: IndicatoriService = inject(IndicatoriService);
    private readonly router: Router = inject(Router);

    Ruolo: typeof Ruolo = Ruolo;
    StatoDocumento: typeof Stato = Stato;

    datiCaricati: boolean = false;
    canEdit: boolean = true;

    private readonly cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

    public readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

    ngOnInit() {
        this.stepsService.step = "indicatori";
        this.datiCaricati = false;

        if (this.activatedRoute.snapshot.data['root'] == "modifica") {

            if (this.documentiService.documentoSelected.Stato == this.StatoDocumento.IN_BOZZA)
                this.canEdit = true;
            else
                this.canEdit = false;

            this.indicatoriService.indicatoriEdit = [];

            const annoScolastico = new Date(this.activatedRoute.snapshot.paramMap.get('annoScolastico')!.split("-")[0] + "-09-01");

            this.classiService.GetClasseStudente(this.activatedRoute.snapshot.paramMap.get('studenteEmail')!.replaceAll('_', '.'), annoScolastico).subscribe({
                next: (classe: Classe) => {
                    this.classiService.classeSelected = classe;

                    this.materieService.GetMaterieClasse().subscribe({
                        next: (data) => {
                            this.indicatoriService.GetCategorieIndicatore().subscribe({
                                next: (data) => {
                                    this.datiCaricati = false;
                                    // Forziamo Angular a capire che c'è stato un cambiamento
                                    this.cdr.detectChanges();

                                    this.indicatoriService.InitializeIndicatori();
                                    this.indicatoriService.SetIndicatori();

                                    console.log(this.indicatoriService.indicatori);

                                    this.datiCaricati = true;
                                    this.cdr.detectChanges();
                                },
                                error: (err) => {
                                    this.datiCaricati = true;
                                    this.checkError.checkError(err);
                                }
                            });
                        },
                        error: (err) => {
                            this.datiCaricati = true;
                            this.checkError.checkError(err);
                        }
                    })
                }
            });
        }
        else {
            this.canEdit = true;
            this.materieService.GetMaterieClasse().subscribe({
                next: (data) => {
                    this.indicatoriService.GetCategorieIndicatore().subscribe({
                        next: (data) => {
                            this.datiCaricati = false;
                            // Forziamo Angular a capire che c'è stato un cambiamento
                            this.cdr.detectChanges();

                            if (Object.keys(this.indicatoriService.indicatori).length == 0) {
                                this.indicatoriService.InitializeIndicatori();
                            }

                            this.datiCaricati = true;
                            this.cdr.detectChanges();
                        },
                        error: (err) => {
                            this.datiCaricati = true;
                            this.checkError.checkError(err);
                        }
                    });
                },
                error: (err) => {
                    this.datiCaricati = true;
                    this.checkError.checkError(err);
                }
            })


        }

        if (this.canEdit) {
            this.materieService.GetMaterieDocente().subscribe({
                next: (data) => { },
                error: (err) => this.checkError.checkError(err)
            })
        }
        else 
            this.materieService.materieDocente = [];
    }

    Edit() {
        // console.log(this.documentiService.indicatoriEdit);
        if (this.indicatoriService.indicatoriEdit.length > 0) {
            this.indicatoriService.UpdateIndicatoriDocumento()?.subscribe({
                next: (data: any) => {
                    console.log("Indicatori modificati con successo");
                },
                error: (err: any) => this.checkError.checkError(err)
            });
        }

        this.router.navigate(["../"], { relativeTo: this.activatedRoute });
    }
}
