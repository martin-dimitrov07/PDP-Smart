import { inject, Injectable } from '@angular/core';
import { DocentiService } from './docenti.service';
import { DataStorageService } from './data-storage.service';
import { Studente } from '../../models/studente';
import { Documento } from '../../models/documento';
import { concatMap, forkJoin, tap } from 'rxjs';
import { Ruolo } from '../../models/docente';
import { Indicatore } from '../../models/indicatore';

@Injectable({
    providedIn: 'root',
})
export class DocumentiService {
    private readonly dataStorageService = inject(DataStorageService);
    // private readonly router: Router = inject(Router);
    private readonly docentiService: DocentiService = inject(DocentiService);

    tappa: string = "studenti";
    avanzamentoCrea: string = "studenti";

    studentiSelected: Studente[] = [];

    materie: string[] = [];
    materieSelected: string[] = [];

    indicatori: Indicatore[] = [];
    categorieInd: string[] = [];

    // CreateDocumenti() {
    //     const richieste = this.studentiSelected.map((studente: Studente) => {
    //         let documento = new Documento(
    //             studente.Email,
    //             new Date(),
    //             studente.DSA_BES
    //         )

    //         console.log(documento);

    //         return this.dataStorageService.InviaRichiesta("POST", "/documento/create", documento);
    //     });

    //     return forkJoin(richieste);
    // }

    GetMaterieDocente() {
        const filters = this.docentiService.docente.Ruolo == Ruolo.DOCENTE ? {
            Insegnamenti: {
                some: {  // serve per relazioni uno a molti
                    Docente_Email: this.docentiService.docente.Email
                }
            }
        } : {};

        let params = {};

        if (filters) {
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

    GetNumeroDocumenti(email: string) {
        const filters = {
            Studente_Email: email
        };

        return this.dataStorageService.InviaRichiesta("GET", "/count-documenti", { filters: JSON.stringify(filters) })!;
    }

    GetIndicatori(categoria: string = "") {
        let filters = {};

        if (categoria) {
            filters = {
                Categoria: categoria
            };
        }

        return this.dataStorageService.InviaRichiesta("GET", "/indicatori", filters)!.pipe(tap((data: any) => {
            console.log(data);
            this.indicatori = data.map((ind: Indicatore) => new Indicatore(ind.Id, ind.Tipologia, ind.Categoria, ind.Descrizione));
        }));
    }

    GetCategorieIndicatore() {
        return this.dataStorageService.InviaRichiesta("GET", "/indicatori")!.pipe(tap((data: any) => {
            console.log(data);
            this.categorieInd = [...new Set<string>(data.map((ind: Indicatore) => ind.Categoria.replace('_', ' ')))];
        }));
    }
}
