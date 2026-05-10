import { Component, inject, Input } from '@angular/core';
import { Documento, Tipo, Stato } from '../../../../models/documento';
import { NgClass } from '@angular/common';
import { DocentiService } from '../../../../shared/services/docenti.service';
import { Ruolo } from '../../../../models/docente';
import { Router } from '@angular/router';
import { DocumentiService } from '../../../../shared/services/documenti.service';
import { catchError, firstValueFrom, map, Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CheckError } from '../../../../shared/utilities/check-error';
import { StudentiService } from '../../../../shared/services/studenti.service';

@Component({
    selector: 'app-documenti-card',
    imports: [NgClass, AsyncPipe],
    templateUrl: './documenti-card.html',
    styleUrl: './documenti-card.css',
})
export class DocumentiCard {
    public readonly docenteService: DocentiService = inject(DocentiService);
    private readonly documentiService: DocumentiService = inject(DocumentiService);
    private readonly studentiService: StudentiService = inject(StudentiService);
    private readonly checkError: CheckError = inject(CheckError);
    private _documento!: Documento;
    private readonly router: Router = inject(Router);

    // Enum per template
    public readonly StatoEnum = Stato;
    public readonly TipoEnum = Tipo;
    public readonly RuoloEnum = Ruolo;

    @Input() classiCoordinateIds: number[] = [];
    @Input() set documento(valore: any) {
        //appena arriva il dato dal padre, lo trasformiamo in un'istanza di Classe
        this._documento = new Documento(
            valore.Studente_Email,
            valore.Tipologia,
            valore.Anno,
            valore.Data_Approvazione
        );
    }

    get documento(): Documento {
        return this._documento;
    }

    ngOnChanges() {
        this.CanDelete();
    }

    GoEdit() {
        // console.log("Navigazione a modifica documento:", this.documento);
        this.router.navigate(["/documenti/modifica", this.documento.Studente_Email.replaceAll('.', '_'), this.documento.Anno?.getFullYear() + "-" + (this.documento.Anno!.getFullYear() + 1)]);
    }

    DeleteDocument() {
        if (confirm("Sei sicuro di voler eliminare questo documento?")) {
            this.documentiService.DeleteDocumento(this.documento);
        }
    }

    canDelete: Observable<boolean> = of(false);

    CanDelete() {
        const docente = this.docenteService.docente;

        if (docente.Ruolo == this.RuoloEnum.ADMIN) {
            this.canDelete = of(true);
            return;
        }

        if (docente.Ruolo == this.RuoloEnum.DOCENTE) {
            this.canDelete = of(false);
            return;
        }

        this.canDelete = this.studentiService.GetClasseByDocumento(this.documento).pipe(
            map(classe => {
                if (!classe) return false;
                return this.classiCoordinateIds.includes(classe.Id);
            }),
            catchError(err => {
                this.checkError.checkError(err);
                return of(false);
            })
        );
    }
}
