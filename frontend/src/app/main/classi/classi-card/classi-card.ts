import { Component, inject, Input } from '@angular/core';
import { Classe } from '../../../models/classe';
import { StudentiService } from '../../../shared/services/studenti.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-classi-card',
    imports: [],
    templateUrl: './classi-card.html',
    styleUrl: './classi-card.css',
})
export class ClassiCard {
    private _classe!: Classe;
    public readonly studentiService = inject(StudentiService);
    private readonly router: Router = inject(Router);

    public nStudenti: number = 0;

    @Input() set classe(valore: any) {
        //appena arriva il dato dal padre, lo trasformiamo in un'istanza di Classe
        this._classe = new Classe(
            valore.Id,
            valore.Classe,
            valore.Sezione,
            valore.Indirizzo,
            new Date(valore.Anno_Scolastico)
        );
        // Chiamiamo il caricamento degli studenti
        this.caricaStudenti();
    }

    //scatta quando il padre passa un nuovo valore alla classe, o quando viene inizializzata per la prima volta
    get classe(): Classe {
        return this._classe;
    }

    caricaStudenti() {
        if (this._classe.Id) {
            this.studentiService.GetNumeroStudenti(this._classe.Id).subscribe({
                next: (data) => { this.nStudenti = data.countStudenti; },
                error: (err: any) => {
                    if (err.status == 401)
                        this.router.navigate(["/login"]);
                    else
                        console.error("Errore API:", err.status, err.error);
                }
            });
        }
    }

    GoStudenti() {
        // console.log(this.nStudenti);
        if (this.nStudenti > 0) {
            this.studentiService.classeSelected = this.classe;

            this.router.navigate(["/indirizzi", this.studentiService.indirizzoSelected, "classi", this.classe.Id, "studenti"]);
        }
    }
}
