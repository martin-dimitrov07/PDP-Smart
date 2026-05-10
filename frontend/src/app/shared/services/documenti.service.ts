import { inject, Injectable } from '@angular/core';
import { DocentiService } from './docenti.service';
import { DataStorageService } from './data-storage.service';
import { Studente } from '../../models/studente';
import { Documento, Tipo } from '../../models/documento';
import { catchError, map, Observable, of, switchMap, tap } from 'rxjs';
import { Ruolo } from '../../models/docente';
import { Indicatore } from '../../models/indicatore';
import { Icf } from '../../models/icf';
import { Classe } from '../../models/classe';
import { CheckError } from '../utilities/check-error';
import { Allegato } from '../../models/allegato';
import { fileManager } from '../utilities/file-manager';
import { StudentiService } from './studenti.service';

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

    allegati: Allegato[] = [];
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

    indicatoriDoc: any[] = [];
    indicatoriEdit: any[] = [];
    // indicatoreSelectedEdit: any = {};

    icfsEdit: any[] = [];

    allegatiDoc: Allegato[] = [];
    allegatiEdit: any[] = [];

    DeleteDocumento(documento: Documento) {
        // app.delete("/api/documento/delete/", GestioneDocumenti.DeletePDP);
        // const documento = JSON.parse(req.body.data).Documento;
        // const indicatori = JSON.parse(req.body.data).Indicatori;
        // const ICFs = JSON.parse(req.body.data).ICFs;
        // const allegati = req.files && req.files.allegati ? (Array.isArray(req.files.allegati) ? req.files.allegati : [req.files.allegati]) : [];

        this.documentoSelected = documento;
        this.GetIndicatoriDocumento();
        this.GetICFSDocumento();
        this.GetAllegatiDocumento();
        this.documentoSelected = {} as Documento;

        const params = {
            documento: JSON.stringify(documento),
            indicatori: JSON.stringify(this.indicatoriDoc),
            icfs: JSON.stringify(this.icfsSelected),
            allegati: JSON.stringify(this.allegatiDoc.map(allegato => ({ Id: allegato.Id })))
        }

        // return this.dataStorageService.InviaRichiesta("DELETE", "/documento/delete", params )!
    }

    GetMaterieDocente() {
        this.materieDocente = [];

        let filtersObservable;

        if (this.docentiService.docente.Ruolo == Ruolo.DOCENTE) {
            const filters = {
                Insegnamenti: {
                    some: {
                        Docente_Email: this.docentiService.docente.Email,
                        Classe_Id: this.classeSelected.Id
                    }
                }
            };
            filtersObservable = of(filters);

        } else if (this.docentiService.docente.Ruolo == Ruolo.COORDINATORE) {
            filtersObservable = this.GetClassiCoordinatore(this.docentiService.docente.Email).pipe(
                map((data: any) => {
                    const isCoordinatore = Object.values(data).some((vettore: any) =>
                        vettore.some((classe: any) => classe.Id == this.classeSelected.Id)
                    );

                    if (!isCoordinatore) {
                        return {
                            Insegnamenti: {
                                some: {
                                    Docente_Email: this.docentiService.docente.Email,
                                    Classe_Id: this.classeSelected.Id
                                }
                            }
                        };
                    }
                    return {};
                })
            );
        } else {
            filtersObservable = of({});
        }

        return filtersObservable.pipe(
            switchMap(filters => {
                const params = {
                    filters: JSON.stringify(filters)
                };
                return this.dataStorageService.InviaRichiesta("GET", "/materie", params)!;
            }),
            tap((data: any) => {
                this.materieDocente = Array.from(data).map((item: any) => item.Nome);
                console.log("Materie caricate:", this.materieDocente);
            })
        );
    }

    GetClassiCoordinatore(docenteEmail: string) {
        const filters = {
            Coordinatore_Email: docenteEmail
        };

        const params = {
            filters: JSON.stringify(filters)
        }

        return this.dataStorageService.InviaRichiesta("GET", "/classi", params)!
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
            Documento_Studente_Email: this.documentoSelected.Studente_Email,
            Documento_Anno: this.documentoSelected.Anno
        }

        return this.dataStorageService.InviaRichiesta("GET", "/indicatori-documento", { filters: JSON.stringify(filters) })!.pipe(tap((data: any) => {
            this.indicatoriDoc = data;
            // console.log(this.indicatoriDoc);
        }));
    }

    GetCategorieIndicatore() {
        return this.dataStorageService.InviaRichiesta("GET", "/indicatori")!.pipe(tap((data: any) => {
            // console.log(data);
            this.categorieInd = [...new Set<string>(data.map((ind: Indicatore) => ind.Categoria))];
        }));
    }

    InitializeIndicatori() {
        this.indicatori = {};

        for (let materia of this.materieClasse) {
            this.indicatori[materia] = {};

            for (let categoria of this.categorieInd) {
                this.indicatori[materia][categoria] = [];
            }
        }
    }

    SetIndicatori() {
        this.GetIndicatoriDocumento()?.subscribe({
            next: () => {
                for (let indicatore of this.indicatoriDoc) {
                    if (this.indicatori[indicatore.Materia]) {
                        this.indicatori[indicatore.Materia][indicatore.Categoria].push({ Id: indicatore.Id, Nota: indicatore.Nota });
                    }
                }
            },
            error: (err) => this.checkError.checkError(err)
        })
    }

    UpdateIndicatoriDocumento() {
        if (!this.documentoSelected) return;

        const payload = {
            documento: this.documentoSelected,
            indicatori: this.indicatoriEdit
        }

        return this.dataStorageService.InviaRichiesta("PATCH", "/indicatori/update", payload)!;
    }

    GetICFs() {
        this.icfs = [];

        return this.dataStorageService.InviaRichiesta("GET", "/icfs")?.pipe(tap((data: any) => {
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

        return this.dataStorageService.InviaRichiesta("GET", "/icfs", { filters: JSON.stringify(filters) })!.pipe(tap((data: any) => {
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

        return this.dataStorageService.InviaRichiesta("PATCH", "/icfs/update", payload)!;
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
            formData.append('allegati', file.File);
        }

        return this.dataStorageService.InviaRichiesta("POST", "/documento/create", formData)!;
    }

    GetAllegatiDocumento() {
        if (!this.documentoSelected) return;

        const filters = {
            Documento_Studente_Email: this.documentoSelected.Studente_Email,
            Documento_Anno: this.documentoSelected.Anno
        };

        return this.dataStorageService.InviaRichiesta("GET", "/allegati", { filters: JSON.stringify(filters) })!.pipe(tap((data: any) => {
            this.allegatiDoc = data.map((allegato: any) => new Allegato(allegato.Id, fileManager.convertBase64ToFile(allegato.FileBase64, allegato.Nome, allegato.Tipo)));
        }))!;
    }

    UpdateAllegatiDocumento() {
        if (!this.documentoSelected) return;

        const formData: FormData = new FormData();

        formData.append('documento', JSON.stringify(this.documentoSelected));

        for (const file of this.allegatiEdit) {
            if (file.Value)
                formData.append('allegatiAdd', file.Allegato.File);
            else
                formData.append('allegatiDelete', file.Allegato.Id);
        }

        return this.dataStorageService.InviaRichiesta("PATCH", "/allegati/update", formData)!;
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
