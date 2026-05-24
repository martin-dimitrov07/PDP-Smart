import { Component, EventEmitter, inject, Output } from '@angular/core';
import { DocumentiService } from '../../../../shared/services/documenti.service';
import { DocentiService } from '../../../../shared/services/docenti.service';
import { Docente, Ruolo } from '../../../../models/docente';
import { RouterLink } from "@angular/router";
import { AnniScolasticiService } from '../../../../shared/services/anni-scolastici.service';

@Component({
    selector: 'app-documenti-header',
    imports: [RouterLink],
    templateUrl: './documenti-header.html',
    styleUrl: './documenti-header.css',
})
export class DocumentiHeader {
    @Output() annoScolastico = new EventEmitter<Date>();

    public readonly docentiService: DocentiService = inject(DocentiService);
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    public readonly anniScolasticiService: AnniScolasticiService = inject(AnniScolasticiService);

    ruoloDocente: Ruolo = this.docentiService.docente.Ruolo;
    Ruolo: typeof Ruolo = Ruolo; // esporta l'enum Ruolo per poterlo usare nell'html

    SetFilterAnnoScolastico(annoScolastico: Date) {
        this.annoScolastico.emit(annoScolastico);
    }
}
