import { inject, Injectable } from '@angular/core';
import { DocentiService } from './docenti.service';
import { DataStorageService } from './data-storage.service';
import { Studente } from '../../models/studente';
import { Documento, Tipo } from '../../models/documento';
import { catchError, forkJoin, lastValueFrom, map, Observable, of, switchMap, tap } from 'rxjs';
import { Ruolo } from '../../models/docente';
import { Indicatore } from '../../models/indicatore';
import { Icf } from '../../models/icf';
import { Classe } from '../../models/classe';
import { CheckError } from '../utilities/check-error';
import { Allegato } from '../../models/allegato';
import { fileManager } from '../utilities/file-manager';
import { StudentiService } from './studenti.service';

import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class DocumentiService {
    private readonly dataStorageService = inject(DataStorageService);
    // private readonly router: Router = inject(Router);
    private readonly docentiService: DocentiService = inject(DocentiService);
    private readonly studentiService: StudentiService = inject(StudentiService);
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
    nDocumenti: number = 0;

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

    icfsEdit: any[] = [];

    allegatiDoc: Allegato[] = [];
    allegatiEdit: any[] = [];

    canEditNota: boolean = false;


    DeleteDocumento(documento: Documento) {
        this.documentoSelected = documento;

        forkJoin({
            indicatori: this.GetIndicatoriDocumento(),
            icfs: this.GetICFSDocumento(),
            allegati: this.GetAllegatiDocumento()
        }).subscribe({
            next: () => {
                this.documentoSelected = {} as Documento;
                const payload = {
                    Documento: JSON.stringify(documento),
                    Indicatori: JSON.stringify(this.indicatoriDoc),
                    ICFs: JSON.stringify(this.icfsSelected),
                    AllegatiIds: JSON.stringify(this.allegatiDoc.map(a => a.Id))
                };

                this.dataStorageService.InviaRichiesta("DELETE", "/documento/delete", payload)!
                    .subscribe({
                        next: (res) => {
                            console.log("documento eliminato con successo");
                            this.documenti = this.documenti.filter(d => {
                                if (!d.Anno || !documento.Anno) return true;

                                const dataLista = new Date(d.Anno).getTime();
                                const dataDaEliminare = new Date(documento.Anno).getTime();

                                return !(d.Studente_Email === documento.Studente_Email && dataLista === dataDaEliminare);
                            });
                            this.GetNumeroDocumenti();
                        },
                        error: (err) => this.checkError.checkError(err)
                    });
            }
        });
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
        if (!this.classeSelected)
            return of(null);

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
        if (!this.documentoSelected) return of(null);

        const filters = {
            Documento_Studente_Email: this.documentoSelected.Studente_Email,
            Documento_Anno: this.documentoSelected.Anno
        }

        return this.dataStorageService.InviaRichiesta("GET", "/indicatori-documento", { filters: JSON.stringify(filters) })!.pipe(tap((data: any) => {
            this.indicatoriDoc = data || [];
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
        if (!this.documentoSelected) return of(null);

        const filters = {
            Documenti_ICF: {
                some: {
                    Documento_Studente_Email: this.documentoSelected.Studente_Email,
                    Documento_Anno: this.documentoSelected.Anno
                }
            }
        }

        return this.dataStorageService.InviaRichiesta("GET", "/icfs", { filters: JSON.stringify(filters) })!.pipe(tap((data: any) => {
            this.icfsSelected = (data && Array.isArray(data))
                ? data.map((icf: Icf) => new Icf(icf.Codice, icf.Descrizione))
                : [];
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
        this.nDocumenti = this.documenti.length;
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
        if (!this.documentoSelected) return of(null);

        const filters = {
            Documento_Studente_Email: this.documentoSelected.Studente_Email,
            Documento_Anno: this.documentoSelected.Anno
        };

        return this.dataStorageService.InviaRichiesta("GET", "/allegati", { filters: JSON.stringify(filters) })!.pipe(tap((data: any) => {
            this.allegatiDoc = (Array.isArray(data)) ?
                data.map((allegato: any) => {
                    if (allegato && allegato.FileBase64) {
                        return new Allegato(
                            allegato.Id,
                            fileManager.convertBase64ToFile(allegato.FileBase64, allegato.Nome, allegato.Tipo)
                        );
                    }
                    return null;
                }).filter(a => a != null)
                : [];
            console.log(this.allegatiDoc);
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

    ApprovaDocumento() {
        if (!this.documentoSelected) return null;

        const filters = {
            Studente_Email: this.documentoSelected.Studente_Email,
            Anno: this.documentoSelected.Anno
        };

        console.log(filters);

        return this.dataStorageService.InviaRichiesta("PATCH", "/documento/approva", { filters })!;
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

    GetFileDocumentoApprovato(documento: Documento) {
        const filters = {
            Studente_Email: documento.Studente_Email,
            Anno: documento.Anno
        };

        return this.dataStorageService.InviaRichiesta("GET", "/documento/file-approvato", { filters: JSON.stringify(filters) })!.pipe(
            map((fileData: any) => {
                if (fileData) {
                    return new Blob([fileData], { type: "application/pdf" });
                }
                throw new Error("File del documento approvato non disponibile");
            })
        );
    }

    async SaveDocumentoApprovato(documento: Documento) {
        const data: any = await this.GetFileDocumentoData(documento);

        if(!data) {
            console.error("Dati del documento non disponibili, impossibile salvare il documento approvato");
            return null;
        }

        const fileDocx: Blob | null = await this.CreateFileDocumento(documento, data);

        if(!fileDocx) {
            console.error("Errore nella creazione del file del documento, impossibile salvare il documento approvato");
            return null;
        }

        const formData = new FormData();    
        formData.append('studente_email', documento.Studente_Email);
        formData.append('anno', documento.Anno ? documento.Anno.toISOString() : "");
        formData.append('documento', fileDocx);

        return this.dataStorageService.InviaRichiesta("POST", "/documento/salva-approvato", formData)!;
    }

    TipoDocumento: typeof Tipo = Tipo;
    private readonly http: HttpClient = inject(HttpClient);

    async CreateFileDocumento(documento: Documento, data: any) {
        try {
            const pathModel = documento.Tipologia == this.TipoDocumento.DSA ? '/MODELLO_PDP_DSA.docx' : '/MODELLO_PDP_BES.docx';

            const content = await lastValueFrom(
                this.http.get(pathModel, { responseType: 'arraybuffer' })
            );

            // Caricamento template .docx con PizZip e Docxtemplater
            const zip = new PizZip(content);
            const doc = new Docxtemplater(zip, {
                paragraphLoop: true, // permette di iterare sui paragrafi del template
                linebreaks: true  // Mantiene i ritorni a capo del template
            });

            if (!data) {
                throw new Error("Dati del documento non disponibili");
            }

            // Compilazione del template con i dati ottenuti
            doc.setData(data);
            doc.render();

            // Generazione del file .docx e download
            const fileDocx = doc.getZip().generate({
                type: "blob",
                mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            });

            return fileDocx;
        }
        catch (error) {
            this.checkError.checkError(error);
            return null;
        }
    }

    async GetFileDocumentoData(documento: Documento) {
        let result: any = {
            anno: documento.Anno?.getFullYear() + "/" + (documento.Anno!.getFullYear() + 1),
            data_approvazione: documento.Data_Approvazione ? new Date(documento.Data_Approvazione).toLocaleDateString() : "N/A"
        }

        // this.documentoSelected = documento;

        try {
            const studente: Studente = await lastValueFrom(this.studentiService.GetStudenteByEmail(documento.Studente_Email));
            result.nome_studente = studente.Cognome + " " + studente.Nome;

            const classe: Classe | null = await lastValueFrom(this.studentiService.GetClasseByDocumento(documento));

            if (!classe) {
                throw new Error("Classe non trovata per il documento dello studente " + result.nome_studente);
            }

            this.classeSelected = classe;
            result.nome_classe = classe.GetFullNome();

            await lastValueFrom(this.GetCategorieIndicatore());
            await lastValueFrom(this.GetMaterieClasse());
            await lastValueFrom(this.GetIndicatoriDocumento());

            //categorie
            for (let i = 1; i <= 4; i++) {
                result["c" + i] = this.categorieInd[i - 1] || "";

                const indicatori = await lastValueFrom(this.GetIndicatori(result["c" + i], documento.Tipologia));

                //materie
                for (let j = 0; j < 13; j++) {
                    result["m" + String.fromCodePoint(65 + j) + "_c" + i] = this.materieClasse[j] || "";
                }

                //descrizioni e valori indicatori
                for (let k = 0; k < 15; k++) {
                    result["d" + String.fromCodePoint(65 + k) + "_c" + i] = indicatori[k] ? indicatori[k].Descrizione : "";

                    for (let l = 0; l < 13; l++) {
                        if (indicatori[k]) {
                            result["i" + String.fromCharCode(65 + l) + String.fromCharCode(65 + k) + i] = this.indicatoriDoc.find((ind: any) => ind.Materia == result["m" + String.fromCodePoint(65 + l) + "_c" + i] && ind.Id == indicatori[k].Id) ? "X" : "";
                        }
                        else
                            result["i" + String.fromCharCode(65 + l) + String.fromCharCode(65 + k) + i] = "";
                    }
                }

                result["c" + i] = result["c" + i].replaceAll("_", " ");
            }

            await lastValueFrom(this.docentiService.GetDocentiByClasse(classe.Id));
            // docenti del consiglio di classe
            for (let m = 1; m <= 13; m++) {
                const nominativo = this.docentiService.docentiConsiglioClasse[m - 1] ? this.docentiService.docentiConsiglioClasse[m - 1].Cognome + " " + this.docentiService.docentiConsiglioClasse[m - 1].Nome : "";
                result['nome_docente' + m] = nominativo;
            }

            return result;
        }
        catch (err) {
            this.checkError.checkError(err);
            return null;
        }
    }
}
