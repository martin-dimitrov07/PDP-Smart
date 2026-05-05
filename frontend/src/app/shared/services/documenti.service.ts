import { inject, Injectable } from '@angular/core';
import { DocentiService } from './docenti.service';
import { DataStorageService } from './data-storage.service';
import { Studente } from '../../models/studente';
import { Documento, Tipo } from '../../models/documento';
import { catchError, Observable, of, tap } from 'rxjs';
import { Ruolo } from '../../models/docente';
import { Indicatore } from '../../models/indicatore';
import { Icf } from '../../models/icf';
import { Classe } from '../../models/classe';
import { CheckError } from '../utilities/check-error';

@Injectable({
    providedIn: 'root',
})
export class DocumentiService {
    private readonly dataStorageService = inject(DataStorageService);
    // private readonly router: Router = inject(Router);
    private readonly docentiService: DocentiService = inject(DocentiService);
    private readonly checkError: CheckError = inject(CheckError);

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

    allegati: File[] = [];
    errorAllegati: string = "";

    anniScolastici: Date[] = [];
    // annoSelected = signal<string>("Anno");
    documenti: Documento[] = [];
    nClassi: number = 0;

    // indicatori = {
    //     "matematica": 
    //         {
    //             "criteri": [ { id: "Id", Nota: "Nota" }, ... ],
    //             "categoria": []
    //         },
    // }

    //edit

    documentoSelected: Documento = {} as Documento;

    indicatoriDoc: Indicatore[] = [];
    icfsEdit: any[] = [];
    //per test
    // allegatiDoc: File[] = [];
    allegatiDoc: File[] = [new File([""], "testtesttesttesttest.pdf", { type: "application/pdf" })];
    allegatiEdit: any[] = [];


    GetMaterieDocente() {
        this.materieDocente = [];

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
            // console.log(this.materieDocente);
            // console.log(data);
        }));
    }

    GetMaterieClasse() {
        this.materieClasse = [];

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
            // console.log(data);
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

    GetIndicatoriDocumento() {
        if (!this.documentoSelected) return;

        const filters = {
            Materia_Documenti_Indicatori: {
                some: {
                    Documento_Studente_Email: this.documentoSelected.Studente_Email,
                    Documento_Anno: this.documentoSelected.Anno
                }
            }
        }

        return this.dataStorageService.InviaRichiesta("GET", "/indicatori", { filters: JSON.stringify(filters) })!.pipe(tap((data: any) => {
            this.indicatoriDoc = data.map((ind: Indicatore) => new Indicatore(ind.Id, ind.Tipologia, ind.Categoria, ind.Descrizione, ind.Nota));
            console.log(this.indicatoriDoc);
        }));
    }

    GetCategorieIndicatore() {
        return this.dataStorageService.InviaRichiesta("GET", "/indicatori")!.pipe(tap((data: any) => {
            // console.log(data);
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

    SetIndicatori() {
        //da aggiustare
        this.GetIndicatoriDocumento()?.subscribe({
            next: () => {
                for (let indicatore of this.indicatoriDoc) {
                    for (let materia of this.materieClasse) {
                        if (this.indicatori[materia] && this.indicatori[materia][indicatore.Categoria]) {
                            this.indicatori[materia][indicatore.Categoria].push({ Id: indicatore.Id, Nota: indicatore.Nota });
                        }
                    }
                }
            },
            error: (err) => this.checkError.checkError(err)
        })
    }

    GetICFs() {
        this.icfs = [];

        return this.dataStorageService.InviaRichiesta("GET", "/icf")?.pipe(tap((data: any) => {
            this.icfs = data.map((icf: Icf) => new Icf(icf.Codice, icf.Descrizione));
        }))
    }

    GetICFSDocumento() {
        if (!this.documentoSelected) return;

        const filters = {
            Documenti_ICF: {
                some: {
                    Documento_Studente_Email: this.documentoSelected.Studente_Email,
                    Documento_Anno: this.documentoSelected.Anno
                }
            }
        }

        return this.dataStorageService.InviaRichiesta("GET", "/icf", { filters: JSON.stringify(filters) })!.pipe(tap((data: any) => {
            this.icfsSelected = data.map((icf: Icf) => new Icf(icf.Codice, icf.Descrizione));
            console.log(this.icfsSelected);
        }));
    }

    UpdateICFsDocumento() {
        if (!this.documentoSelected) return;

        const payload = {
            documento: this.documentoSelected,
            icfs: this.icfsEdit
        }

        return this.dataStorageService.InviaRichiesta("PATCH", "/documento/update-icfs", payload)!;
    }

    GetAnniScolastici(): Observable<any> {
        this.anniScolastici = [];

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

    GetAllegatiDocumento() {
        if (!this.documentoSelected) return;

        const filters = {
            Documento_Studente_Email: this.documentoSelected.Studente_Email,
            Documento_Anno: this.documentoSelected.Anno
        };

        return this.dataStorageService.InviaRichiesta("GET", "/allegati", { filters: JSON.stringify(filters) })!.pipe(tap((data: any) => {
            this.allegatiDoc = data;
        }));
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
                // console.log(data);
            })
        );
    }

    GetDocumentoById(studenteEmail: string, anno: Date): Observable<any> {
        const filters = {
            Studente_Email: studenteEmail,
            Anno: anno
        };

        return this.dataStorageService.InviaRichiesta("GET", "/documenti", { filters: JSON.stringify(filters) })!.pipe(
            tap((data: any) => {

                // console.log(data);

                this.documentoSelected = new Documento(
                    data[0].Studente_Email,
                    data[0].Tipologia,
                    new Date(data[0].Anno),
                    data[0].Data_Approvazione ? new Date(data[0].Data_Approvazione) : undefined
                );

                // console.log(this.documentoSelected);
                return true;
            }),
            catchError((err) => {
                this.checkError.checkError(err);
                return of(false)
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
            "ICFs": this.icfsSelected
        }

        formData.append('data', JSON.stringify(payload));
        for (const file of this.allegati) {
            formData.append('allegati', file);
        }

        return this.dataStorageService.InviaRichiesta("POST", "/documento/create", formData)!;
    }

    UpdateAllegatiDocumento() {
        if (!this.documentoSelected) return;

        const formData: FormData = new FormData();

        formData.append('documento', JSON.stringify(this.documentoSelected));

        for (const file of this.allegatiEdit) {
            if (file.Value)
                formData.append('allegatiAdd', file);
            else
                formData.append('allegatiDelete', { Nome: (file.Allegato as File).name });

        }


        const payload = {
            documento: this.documentoSelected,
            icfs: this.icfsEdit
        }

        return this.dataStorageService.InviaRichiesta("PATCH", "/documento/update-icfs", payload)!;
    }

    ResetCreateDocumento() {
        this.classeSelected = {} as Classe;
        this.studenteSelected = {} as Studente;
        this.materieDocente = [];
        this.materieClasse = [];
        this.indicatori = {};
        this.categorieInd = [];
        this.icfs = [];
        this.icfsSelected = [];
        this.allegati = [];
        this.errorAllegati = "";
    }
}
