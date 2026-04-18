import { inject, Injectable } from '@angular/core';
import { DocentiService } from './docenti.service';
import { DataStorageService } from './data-storage.service';
import { Studente } from '../../models/studente';
import { Documento } from '../../models/documento';
import { concatMap, forkJoin, tap } from 'rxjs';
import { Ruolo } from '../../models/docente';

@Injectable({
    providedIn: 'root',
})
export class DocumentiService {
    private readonly dataStorageService = inject(DataStorageService);
    // private readonly router: Router = inject(Router);
    private readonly docentiService: DocentiService = inject(DocentiService);

    studentiSelected: Studente[] = [];

    materie: String[] = [];
    materieSelected: String[] = [];

    CreateDocumenti() {
        const richieste = this.studentiSelected.map((studente: Studente) => {
            let documento = new Documento(
                studente.Email,
                new Date(),
                studente.DSA_BES
            )

            console.log(documento);

            return this.dataStorageService.InviaRichiesta("POST", "/documento/create", documento);
        });

        return forkJoin(richieste);
    }

    GetMaterieDocente() {
        const filters = this.docentiService.docente.Ruolo == Ruolo.DOCENTE ? {
            Insegnamenti: {
                some: {  // serve per relazioni uno a molti
                    Docente_Email: this.docentiService.docente.Email
                }
            }
        } : {};

        let params = {};

        if (filters) 
        {
            params = {
                filters: JSON.stringify(filters)
            }
        }

        console.log(this.docentiService.docente);

        return this.dataStorageService.InviaRichiesta("GET", "/materie", params)!.pipe(tap((data: any) => {
            this.materie = Array.from(data).map((item: any) => item.Nome);
            console.log(this.materieSelected);
            console.log(data);
        }));
    }

    AddMaterieDocumento() {
        let richieste: any[] = [];

        for (const studente of this.studentiSelected) {
            for (const materia of this.materieSelected) {
                richieste.push(this.dataStorageService.InviaRichiesta("POST", "/documento/materie/add", {
                    materia,
                    documento: JSON.stringify({
                        Anno: Documento.SetAnnoCorrect(new Date()),
                        Email: studente.Email
                    })
                }));
            }
        }

        return forkJoin(richieste);
    }
}
