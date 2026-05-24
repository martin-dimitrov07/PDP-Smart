import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentiEditSection } from './documenti-edit-section/documenti-edit-section';
import { DocumentiEditHeader } from './documenti-edit-header/documenti-edit-header';
import { Classe } from '../../../models/classe';
import { DocentiService } from '../../../shared/services/docenti.service';
import { StudentiService } from '../../../shared/services/studenti.service';
import { CheckError } from '../../../shared/utilities/check-error';
import { Ruolo } from '../../../models/docente';
import { DocumentiService } from '../../../shared/services/documenti.service';
import { Stato } from '../../../models/documento';
import { ModalValidationDocumento } from './modal-validation-documento/modal-validation-documento';
import { ClassiService } from '../../../shared/services/classi.service';

@Component({
    selector: 'app-documenti-edit',
    imports: [DocumentiEditSection, DocumentiEditHeader, ModalValidationDocumento],
    templateUrl: './documenti-edit.html',
    styleUrl: './documenti-edit.css',
})
export class DocumentiEdit {
    annoScolastico: string = "";
    studenteEmail: string = "";
    private readonly activatedRouter: ActivatedRoute = inject(ActivatedRoute);

    public readonly documentiService: DocumentiService = inject(DocumentiService);
    private readonly docentiService: DocentiService = inject(DocentiService);
    private readonly studentiService: StudentiService = inject(StudentiService);
    private readonly classiService: ClassiService = inject(ClassiService);
    private readonly checkError: CheckError = inject(CheckError);

    RuoloDocente: typeof Ruolo = Ruolo;
    StatoDocumento: typeof Stato = Stato;

    canValidate: boolean = false;

    ngOnInit() {
        this.annoScolastico = this.activatedRouter.snapshot.paramMap.get("annoScolastico")!.replace("-", "/");
        this.studenteEmail = this.activatedRouter.snapshot.paramMap.get("studenteEmail")!.replaceAll('_', '.');
        this.CanValidate();
    }

    ngOnChanges() {
        this.CanValidate();
    }

    CanValidate() {
        const docente = this.docentiService.docente;

        if (docente.Ruolo == this.RuoloDocente.ADMIN) {
            this.canValidate = true;
            return;
        }

        if (docente.Ruolo == this.RuoloDocente.DOCENTE) {
            this.canValidate = false;
            return;
        }

        this.classiService.GetClasseByDocumento(this.documentiService.documentoSelected).subscribe({
            next: (classe: Classe | null) => {
                if (!classe) return;
                this.canValidate = classe.Coordinatore_Email == docente.Email;
            },
            error: (err: any) => this.checkError.checkError(err)
        });
    }
}
