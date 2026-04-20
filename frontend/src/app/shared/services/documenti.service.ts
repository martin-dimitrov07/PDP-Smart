import { inject, Injectable } from '@angular/core';
import { DocentiService } from './docenti.service';
import { DataStorageService } from './data-storage.service';
import { Studente } from '../../models/studente';
import { Documento } from '../../models/documento';
import { concatMap, forkJoin, map, mergeMap, tap } from 'rxjs';
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

    materieDocente: string[] = [];
    materiaSelected: string = "";
    materieSelected: string[] = [];

    indicatori: any = {};
    categorieInd: string[] = [];

    // indicatori = {
    //     "matematica": 
    //         {
    //             "criteri": [ "id1", "id2" ]
    //         },
    // }

    //#region 
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
    //#endregion

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
            this.materieDocente = Array.from(data).map((item: any) => item.Nome);
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
            // console.log(data);
            return data.map((ind: Indicatore) => new Indicatore(ind.Id, ind.Tipologia, ind.Categoria, ind.Descrizione));
        }));
    }

    GetCategorieIndicatore() {
        return this.dataStorageService.InviaRichiesta("GET", "/indicatori")!.pipe(tap((data: any) => {
            console.log(data);
            this.categorieInd = [...new Set<string>(data.map((ind: Indicatore) => ind.Categoria))];
        }));
    }

    // Aggiungi questo metodo nel tuo DocumentiService
    CaricaIndicatoriPerMateria(materia: string) {
        return this.GetCategorieIndicatore().pipe(
            // MergeMap: esegue tutte le chiamate che gli arrivano 
            // le esegue tutte in parallelo e aspetta che tutte finiscano per emettere il risultato
            mergeMap(() => {
                const richieste = this.categorieInd.map(cat =>
                    this.GetIndicatori(cat).pipe(
                        map(listaIndicatori => ({ categoria: cat, lista: listaIndicatori }))
                    )
                );
                return forkJoin(richieste);
            }),
            // Formatta i dati per la struttura
            map((risultati) => {
                // risultati è un array: [{categoria: 'A', lista: [...]}, {categoria: 'B', lista: [...]}]
                const struttura: any = { };
                
                for (const ris of risultati) {
                    struttura[ris.categoria] = ris.lista.map((ind: Indicatore) => ({ Id: ind.Id, Valore: false, Descrizione: ind.Descrizione }))
                }

                // Assegna alla materia specifica
                this.indicatori[materia] = struttura;
                return struttura;
            })
        );
    }
}
