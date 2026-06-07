import { inject, Injectable } from '@angular/core';
import { DocentiService } from './docenti.service';
import { DataStorageService } from './data-storage.service';
import { Studente } from '../../models/studente';
import { Documento, Stato, Tipo } from '../../models/documento';
import { catchError, forkJoin, from, lastValueFrom, map, Observable, of, switchMap, tap, throwError } from 'rxjs';
import { Classe } from '../../models/classe';
import { CheckError } from '../utilities/check-error';
import { StudentiService } from './studenti.service';

import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { HttpClient } from '@angular/common/http';
import { ClassiService } from './classi.service';
import { MaterieService } from './materie.service';
import { IndicatoriService } from './indicatori.service';
import { IcfService } from './icf.service';
import { AllegatiService } from './allegati.service';

@Injectable({
    providedIn: 'root',
})
export class DocumentiService {
    private readonly dataStorageService: DataStorageService = inject(DataStorageService);
    private readonly classiService: ClassiService = inject(ClassiService);
    private readonly docentiService: DocentiService = inject(DocentiService);
    private readonly allegatiService: AllegatiService = inject(AllegatiService);
    private readonly studentiService: StudentiService = inject(StudentiService);
    private readonly indicatoriService: IndicatoriService = inject(IndicatoriService);
    private readonly materieService: MaterieService = inject(MaterieService);
    private readonly icfService: IcfService = inject(IcfService);
    private readonly checkError: CheckError = inject(CheckError);
    private readonly http: HttpClient = inject(HttpClient);

    searchTermFilter: string = "";
    annoScolasticoFilter: Date | null = null;
    TipoFilter: Tipo | null = null;
    StatoFilter: string[] = [];

    TipoDocumento: typeof Tipo = Tipo;
    Stato: typeof Stato = Stato;

    documenti: Documento[] = [];
    nDocumenti: number = 0;
    documentoSelected: Documento | null = null;
    canEditNota: boolean = false;

    DeleteDocumento(documento: Documento) {
        forkJoin({
            indicatori: this.indicatoriService.GetIndicatoriDocumento(),
            icfs: this.icfService.GetICFSDocumento(),
            allegati: this.allegatiService.GetAllegatiDocumento()
        }).subscribe({
            next: () => {
                const payload = {
                    Documento: JSON.stringify(documento),
                    Indicatori: JSON.stringify(this.indicatoriService.indicatoriDoc),
                    ICFs: JSON.stringify(this.icfService.icfsSelected),
                    AllegatiIds: JSON.stringify(this.allegatiService.allegatiDoc.map(a => a.Id))
                };

                this.dataStorageService.InviaRichiesta("DELETE", "/documento/delete", payload)!.subscribe({
                    next: (res) => {
                        console.log("Documento eliminato con successo");
                        const indexDelDoc = this.documenti.findIndex(d => d.Studente_Email == documento.Studente_Email && d.Anno?.getTime() == documento.Anno?.getTime());
                        if (indexDelDoc != -1) {
                            this.documenti.splice(indexDelDoc, 1);
                        }
                        this.GetNumeroDocumenti();
                    },
                    error: (err) => this.checkError.checkError(err)
                });
            }
        });
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

        if (Stato_Documento != -1 && Stato_Documento.in && Stato_Documento.in.length > 0) {
            const lastYear = new Date();
            lastYear.setFullYear(lastYear.getFullYear() - 1);

            let orConditions: any[] = [];

            Stato_Documento.in.forEach((stato: string) => {
                switch (stato) {
                    case Stato.IN_BOZZA:
                        orConditions.push({ Data_Approvazione: null });
                        break;
                    case Stato.VALIDATO:
                        orConditions.push({ Data_Approvazione: { gte: lastYear } });
                        break;
                    case Stato.SCADUTO:
                        orConditions.push({ Data_Approvazione: { lt: lastYear } });
                        break;
                }
            });

            if (orConditions.length > 0) {
                filters.OR = orConditions;
            }
        }

        filters.Docente_Email = this.docentiService.docente?.Email;

        return this.dataStorageService.InviaRichiesta("GET", "/documenti", { filters: JSON.stringify(filters) })!.pipe(
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
            Anno: anno,
            Docente_Email: this.docentiService.docente?.Email
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
        if (!this.studentiService.studenteSelected) {
            return
        }
        const documento = new Documento(this.studentiService.studenteSelected.Email, this.studentiService.studenteSelected.DSA_BES ? Tipo.DSA : Tipo.BES);

        const newDoc = {
            Studente_Email: documento.Studente_Email,
            Anno: documento.Anno,
            Tipologia: documento.Tipologia
        };

        const formData = new FormData();

        const payload = {
            "Documento": newDoc,
            "Indicatori": this.indicatoriService.indicatori,
            "ICFs": this.icfService.icfsSelected
        }

        formData.append('data', JSON.stringify(payload));
        for (const file of this.allegatiService.allegati) {
            formData.append('allegati', file.File);
        }

        return this.dataStorageService.InviaRichiesta("POST", "/documento/create", formData)!;
    }

    ApprovaDocumento() {
        if (!this.documentoSelected) return null;

        const filters = {
            Studente_Email: this.documentoSelected.Studente_Email,
            Anno: this.documentoSelected.Anno
        };

        // console.log(filters);

        return this.dataStorageService.InviaRichiesta("PATCH", "/documento/approva", { filters })!;
    }

    ResetCreateDocumento() {
        this.classiService.classeSelected = null;
        this.studentiService.studenteSelected = null;
        this.materieService.materieEdit = [];
        this.materieService.materieClasse = [];
        this.indicatoriService.indicatori = {};
        this.indicatoriService.categorieInd = [];
        this.icfService.icfs = [];
        this.icfService.icfsSelected = [];
        this.allegatiService.allegati = [];
        this.allegatiService.errorAllegati = "";
        this.allegatiService.allegatiDoc = [];
        this.allegatiService.allegatiEdit = [];
    }

    ResetFiltriDocumenti() {
        this.searchTermFilter = "";
        this.annoScolasticoFilter = null;
        this.TipoFilter = null;
        this.StatoFilter = [];
    }

    GetFileDocumentoApprovato(documento: Documento) {
        const filters = {
            Studente_Email: documento.Studente_Email,
            Anno: documento.Anno!.toISOString()
        };

        return this.dataStorageService.ScaricaFile("/documento/file-approvato", filters)!.pipe(
            map((fileData: any) => {
                if (fileData) {
                    return new File([fileData], "Documento_approvato_" + documento.Studente_Email + "_" + documento.Anno!.toISOString().split('T')[0] + ".pdf", { type: "application/pdf" });
                }
                throw new Error("File del documento approvato non disponibile");
            })
        );
    }

    SaveDocumentoApprovato(documento: Documento) {
        console.log(documento);
        // converte la prima Promise in un Observable usando 'from'
        return from(this.GetFileDocumentoData(documento)).pipe(
            switchMap((data: any) => {
                if (!data) {
                    console.error("Dati del documento non disponibili, impossibile salvare il documento approvato");
                    return of(null);
                }

                return from(this.CreateFileDocumento(documento, data));
            }),

            switchMap((fileDocx: Blob | null) => {
                if (!fileDocx) {
                    console.error("Errore nella creazione del file del documento, impossibile salvare il documento approvato");
                    return of(null);
                }

                const formData = new FormData();
                formData.append('studente_email', documento.Studente_Email);
                formData.append('anno', documento.Anno ? documento.Anno.toISOString() : "");
                formData.append('data_approvazione', documento.Data_Approvazione ? documento.Data_Approvazione.toISOString() : "");
                formData.append('documento', fileDocx);

                return this.dataStorageService.InviaRichiesta("POST", "/documento/salva-approvato", formData)!;
            })
        );
    }

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

        this.documentoSelected = documento;

        try {
            const studente: Studente = await lastValueFrom(this.studentiService.GetStudenteByEmail(documento.Studente_Email, documento.Anno!));
            result.nome_studente = studente.Cognome + " " + studente.Nome;

            const classe: Classe | null = await lastValueFrom(this.classiService.GetClasseByDocumento(documento));

            if (!classe) {
                throw new Error("Classe non trovata per il documento dello studente " + result.nome_studente);
            }

            this.classiService.classeSelected = classe;
            result.nome_classe = classe.GetFullNome();

            await lastValueFrom(this.indicatoriService.GetCategorieIndicatore());
            await lastValueFrom(this.materieService.GetMaterieClasse());
            await lastValueFrom(this.indicatoriService.GetIndicatoriDocumento());

            //categorie
            for (let i = 1; i <= 4; i++) {
                result["c" + i] = this.indicatoriService.categorieInd[i - 1] || "";

                const indicatori = await lastValueFrom(this.indicatoriService.GetIndicatori(result["c" + i], documento.Tipologia));

                //materie
                for (let j = 0; j < 13; j++) {
                    result["m" + String.fromCodePoint(65 + j) + "_c" + i] = this.materieService.materieClasse[j] || "";
                }

                //descrizioni e valori indicatori
                for (let k = 0; k < 15; k++) {
                    result["d" + String.fromCodePoint(65 + k) + "_c" + i] = indicatori[k] ? indicatori[k].Descrizione : "";

                    for (let l = 0; l < 13; l++) {
                        if (indicatori[k]) {
                            result["i" + String.fromCharCode(65 + l) + String.fromCharCode(65 + k) + i] = this.indicatoriService.indicatoriDoc.find((ind: any) => ind.Materia == result["m" + String.fromCodePoint(65 + l) + "_c" + i] && ind.Id == indicatori[k].Id) ? "X" : "";
                        }
                        else
                            result["i" + String.fromCharCode(65 + l) + String.fromCharCode(65 + k) + i] = "";
                    }
                }

                result["c" + i] = result["c" + i].replaceAll("_", " ");
            }

            await lastValueFrom(this.docentiService.GetDocentiByClasse(classe.Id));

            // docenti del consiglio di classe
            let m = 0;
            for (const docente of this.docentiService.docentiConsiglioClasse) {
                const materie = await lastValueFrom(this.materieService.GetMaterieDocenteClasse(docente.Email, classe.Id));

                const nominativo = docente.Cognome + " " + docente.Nome;
                result['nome_docente' + (m + 1)] = nominativo + " (" + materie.join(", ") + ")";
                m++;
            }

            if(m < 13)
                for (let n = m + 1; n <= 13; n++) {
                    result['nome_docente' + n] = "";
                }

            return result;
        }
        catch (err: any) {
            this.checkError.checkError(err);
            return null;
        }
    }
}
