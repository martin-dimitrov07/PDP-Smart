import { inject, Injectable } from '@angular/core';
import { DocentiService } from './docenti.service';
import { DataStorageService } from './data-storage.service';
import { Studente } from '../../models/studente';
import { Documento, Tipo } from '../../models/documento';
import { concatMap, forkJoin, map, mergeMap, Observable, of, tap } from 'rxjs';
import { Ruolo } from '../../models/docente';
import { Indicatore, Tipologia } from '../../models/indicatore';
import { Icf } from '../../models/icf';
import { Classe } from '../../models/classe';
import { json } from 'stream/consumers';

@Injectable({
    providedIn: 'root',
})
export class DocumentiService {
    private readonly dataStorageService = inject(DataStorageService);
    // private readonly router: Router = inject(Router);
    private readonly docentiService: DocentiService = inject(DocentiService);

    classeSelected: Classe = {} as Classe;
    studenteSelected: Studente = {} as Studente;

    materieDocente: string[] = [];
    materieClasse: string[] = [];

    // materiaSelected: string = "";
    indicatori: any = {};
    categorieInd: string[] = [];

    indicatoreSelected: any = {};

    icfs: Icf[] = [];
    icfsSelected: Icf[] = [];

    anniScolastici: Date[] = [];
    documenti: Documento[] = [];
    nClassi: number = 0;

    allegati: File[] = [];
    errorAllegati: string = "";

    // indicatori = {
    //     "matematica": 
    //         {
    //             "criteri": [ { id: "Id", Nota: "Nota" }, ... ],
    //             "categoria": []
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
                    Docente_Email: this.docentiService.docente.Email,
                    Classe_Id: this.classeSelected.Id
                }
            }
        } : {};

        let params = {};

        if (filters) {
            params = {
                filters: JSON.stringify(filters)
            }
        }

        // console.log(this.docentiService.docente);

        return this.dataStorageService.InviaRichiesta("GET", "/materie", params)!.pipe(tap((data: any) => {
            this.materieDocente = Array.from(data).map((item: any) => item.Nome);
            console.log(this.materieDocente);
            console.log(data);
        }));
    }

    GetMaterieClasse() {
        console.log(this.classeSelected);
        const filters = {
            Insegnamenti: {
                some: {  // serve per relazioni uno a molti
                    Classe_Id: this.classeSelected.Id,
                }
            }
        };

        let params = {};

        if (filters) {
            params = {
                filters: JSON.stringify(filters)
            }
        }

        // console.log(this.docentiService.docente);

        return this.dataStorageService.InviaRichiesta("GET", "/materie", params)!.pipe(tap((data: any) => {
            this.materieClasse = Array.from(data).map((item: any) => item.Nome);
            console.log(this.materieClasse);
            console.log(data);
        }));
    }

    GetIndicatori(categoria: string = "", tipologia: string) {
        let filters: any = {};

        if (categoria) {
            filters.Categoria = categoria;
        }

        if (tipologia) {
            filters.Tipologia = { in: [tipologia, "ENTRAMBI"] }
        }

        return this.dataStorageService.InviaRichiesta("GET", "/indicatori", { filters: JSON.stringify(filters) })!.pipe(tap((data: any) => {
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

    InitializeIndicatori() {
        for (let materia of this.materieClasse) {
            this.indicatori[materia] = {};

            for (let categoria of this.categorieInd) {
                this.indicatori[materia][categoria] = [];
            }
        }
    }

    // CaricaIndicatoriPerMateria(materia: string) {

    //     // console.log(this.indicatori[materia])

    //     // restituisce un Observable che emette immediatamente i dati esistenti
    //     if (this.indicatori[materia] && Object.keys(this.indicatori[materia]).length > 0) {
    //         return of(this.indicatori[materia]);
    //     }

    //     return this.GetCategorieIndicatore().pipe(
    //         // MergeMap: esegue tutte le chiamate parallelo e aspetta che tutte finiscano per emettere il risultato
    //         mergeMap(() => {
    //             const richieste = this.categorieInd.map(cat => {
    //                 const tipologia = this.studenteSelected.DSA_BES ? "DSA" : "BES";
    //                 return this.GetIndicatori(cat, tipologia).pipe(
    //                     map(listaIndicatori => ({ categoria: cat, lista: listaIndicatori }))
    //                 )
    //             });
    //             return forkJoin(richieste);
    //         }),
    //         // Formatta i dati per la struttura
    //         map((risultati) => {
    //             //array: [{categoria: 'A', lista: [...]}, {categoria: 'B', lista: [...]}]
    //             const struttura: any = {};

    //             for (const ris of risultati) {
    //                 struttura[ris.categoria] = ris.lista.map((ind: Indicatore) => ({ Id: ind.Id, Valore: false, Descrizione: ind.Descrizione }))
    //             }

    //             // Assegna alla materia specifica
    //             this.indicatori[materia] = struttura;
    //             return struttura;
    //         })
    //     );
    // }

    GetICFs() {
        return this.dataStorageService.InviaRichiesta("GET", "/icf")?.pipe(tap((data: any) => {
            this.icfs = data.map((icf: Icf) => new Icf(icf.Codice, icf.Descrizione));
        }))
    }

    GetAnniScolastici(): Observable<any> {
        let params: any = {};

        if (this.docentiService.docente.Ruolo != Ruolo.ADMIN) {
            params.docenteEmail = this.docentiService.docente.Email;
        }

        return this.dataStorageService.InviaRichiesta("GET", "/anni-scolastici-documenti", params)!.pipe(
            tap((data: any) => {
                this.anniScolastici = Array.from(data).map((item: any) => new Date(item));
            })
        );
    }

    GetDocumenti(searchTerm: string = "", DSA_BES: any = -1, Stato_Documento: any = -1, filterAnnoScolastico: Date): Observable<any> {
        let filters: any = {};

        filters.Anno = filterAnnoScolastico;

        if (searchTerm) {
            filters.Studente_Email = {
                contains: searchTerm,
                mode: 'insensitive'
            };
        }

        if (DSA_BES != -1)
            filters.Tipologia = DSA_BES;

        if (Stato_Documento != -1)
            filters.Stato = Stato_Documento;

        let params: any = {
            filters: JSON.stringify(filters)
        };

        if (this.docentiService.docente.Ruolo != Ruolo.ADMIN) {
            params.docenteEmail = this.docentiService.docente.Email;
        }

        return this.dataStorageService.InviaRichiesta("GET", "/documenti", params)!.pipe(
            tap((data: any) => {
                this.documenti = data.map((doc: any) => new Documento(
                    doc.Studente_Email,
                    doc.Tipologia,
                    new Date(doc.Anno),
                    doc.Data_Approvazione ? new Date(doc.Data_Approvazione) : undefined
                ));
                console.log(data);
            })
        );
    }

    GetNumeroDocumenti() {
        this.nClassi = this.documenti.length;
    }

    CreateDocumento() {
        const documento = new Documento(this.studenteSelected.Email, this.studenteSelected.DSA_BES ? Tipo.DSA : Tipo.BES);

        const formData = new FormData();

        const payload = {
            "Documento": documento,
            "Indicatori": this.indicatori,
            "ICFs": this.icfs
        }

        formData.append('data', JSON.stringify(payload));
        for (const file of this.allegati) {
            formData.append('allegati', file);
        }

        return this.dataStorageService.InviaRichiesta("POST", "/documento/create", formData)!;

        //1. creo documento

        //2. ciclo materie -> per ogni materia ciclo indicatori => aggiungo indicatori

        //3. aggiungo ICFs

        //4. aggiungo allegati
    }
}
