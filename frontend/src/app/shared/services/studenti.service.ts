import { inject, Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { Studente } from '../../models/studente';
import { Classe } from '../../models/classe';
import { Ruolo } from '../../models/docente';
import { DocentiService } from './docenti.service';
import { firstValueFrom, map, Observable, switchMap, tap } from 'rxjs';
import { CheckError } from '../utilities/check-error';
import { Documento } from '../../models/documento';

@Injectable({
    providedIn: 'root',
})
export class StudentiService {
    private readonly dataStorageService = inject(DataStorageService);
    private readonly docentiService: DocentiService = inject(DocentiService);
    public readonly checkError: CheckError = inject(CheckError);

    indirizzi: string[] = [];
    indirizzoSelected?: string;

    anniScolastici: Date[] = [];

    classi: any = {};
    classiNoEmpty: any = {};
    nClassi: number = 0;
    classeSelected?: Classe;

    studenti: Studente[] = [];
    studentiNoDoc: Studente[] = [];

    GetIndirizzi(): Observable<any> {
        const filters = this.docentiService.docente.Ruolo != Ruolo.ADMIN ? {
            Insegnamenti: {
                some: {  // serve per relazioni uno a molti
                    Docente_Email: this.docentiService.docente.Email
                }
            }
        } : {};

        const params = {
            filters: JSON.stringify(filters),
            distinct: "Indirizzo"
        }

        console.log(this.docentiService.docente);

        return this.dataStorageService.InviaRichiesta("GET", "/indirizzi", params)!.pipe(tap((data: any) => {
            this.indirizzi = Array.from(data).map((item: any) => item.Indirizzo);
            console.log(this.indirizzi);
        }));
    }

    GetClasseByDocumento(documento: Documento) {
        const filters = {
            Classi_Studente: {
                some: {
                    Studente_Email: documento.Studente_Email
                }
            },
            Anno_Scolastico: documento.Anno
        };

        const params = {
            filters: JSON.stringify(filters)
        };

        return this.dataStorageService.InviaRichiesta("GET", "/classi", params)!.pipe(
            map((res: any) => {
                const liste = Object.values(res);
                const classeTrovata: any = liste.find((v: any) => Array.isArray(v) && v.length > 0);
                return classeTrovata ? new Classe(classeTrovata[0].Id, classeTrovata[0].Classe, classeTrovata[0].Sezione, classeTrovata[0].Indirizzo, classeTrovata[0].Coordinatore_Email, classeTrovata[0].Anno_Scolastico) : null;
            })
        );
    }

    GetClassi(filterClassi: any, filterAnnoScolastico: any): Observable<any> {
        let filters: any = this.docentiService.docente.Ruolo != Ruolo.ADMIN ? {
            Insegnamenti: {
                some: {  // serve per relazioni uno a molti
                    Docente_Email: this.docentiService.docente.Email
                }
            }
        } : {};

        if (this.indirizzoSelected)
            filters.Indirizzo = this.indirizzoSelected;

        if (filterClassi["in"])
            filters.Classe = filterClassi;

        if (filterAnnoScolastico)
            filters.Anno_Scolastico = filterAnnoScolastico;

        const params = {
            filters: JSON.stringify(filters)
        }

        console.log(filters);

        return this.dataStorageService.InviaRichiesta("GET", "/classi", params)!.pipe(tap((data: any) => {
            this.classi = data;
            console.log(this.classi);
        }));
    }

    GetClassiNoDocEmpty(filterClassi: any, filterAnnoScolastico: any) {
        this.indirizzoSelected = "";
        if (this.docentiService.docente.Ruolo == Ruolo.COORDINATORE) {
            return this.GetClassiNoDocEmptyCoordinatore(filterAnnoScolastico);
        }
        return this.GetClassi(filterClassi, filterAnnoScolastico).pipe(
            switchMap(async (data: any) => {
                const resultLocal: any = {};

                const groupPromises = Object.keys(data).map(async (key) => {
                    const classesGroup = data[key];

                    const validateClasses = classesGroup.map(async (classe: any) => {
                        const studentsCount = await firstValueFrom(this.GetNumeroStudenti(classe.Id));

                        if (studentsCount.countStudenti > 0) {
                            const studentiNoDoc = await firstValueFrom(this.GetStudentiNoDocumento(classe.Id));
                            if (studentiNoDoc && studentiNoDoc.length > 0) {
                                return classe;
                            }
                        }
                        return null;
                    });

                    const risultati = await Promise.all(validateClasses);

                    resultLocal[key] = risultati.filter(c => c != null);
                });

                await Promise.all(groupPromises);

                this.classiNoEmpty = resultLocal;
                return resultLocal;
            })
        );
    }

    GetClassiNoDocEmptyCoordinatore(filterAnnoScolastico: Date | null): Observable<any> {
        const filters: any = {
            Coordinatore_Email: this.docentiService.docente.Email,
            Classi_Studente: {
                some: {}
            }
        };

        if (filterAnnoScolastico)
            filters.Anno_Scolastico = filterAnnoScolastico;

        const params = {
            filters: JSON.stringify(filters)
        };

        return this.dataStorageService.InviaRichiesta("GET", "/classi", params)!.pipe(
            switchMap(async (data: any) => {
                const resultLocal: any = {};

                const groupPromises = Object.keys(data).map(async (key) => {
                    const classesGroup = data[key];

                    const validateClasses = classesGroup.map(async (classe: any) => {
                        const studentsCount = await firstValueFrom(this.GetNumeroStudenti(classe.Id));

                        if (studentsCount.countStudenti > 0) {
                            const studentiNoDoc = await firstValueFrom(this.GetStudentiNoDocumento(classe.Id));
                            if (studentiNoDoc && studentiNoDoc.length > 0) {
                                return classe;
                            }
                        }
                        return null;
                    });

                    const risultati = await Promise.all(validateClasses);

                    resultLocal[key] = risultati.filter(c => c != null);
                });

                await Promise.all(groupPromises);

                this.classiNoEmpty = resultLocal;
                return resultLocal;
            })
        );
    }

    GetClasseStudente(email: string, anno: Date): Observable<any> {
        const filters = {
            Classi_Studente: {
                some: {
                    Studente_Email: email
                }
            },
            Anno_Scolastico: anno
        };

        return this.dataStorageService.InviaRichiesta("GET", "/classi", { filters: JSON.stringify(filters) })!.pipe(map((data: any) => {
            for (let key in data) {
                const nKey = parseInt(key);

                if (data[nKey].length > 0) {
                    return new Classe(
                        data[nKey][0].Id,
                        data[nKey][0].Classe,
                        data[nKey][0].Sezione,
                        data[nKey][0].Indirizzo,
                        data[nKey][0].Coordinatore_Email,
                        new Date(data[nKey][0].Anno_Scolastico)
                    );
                }
            }

            return null;
        }));
    }


    GetClasseById(classeId: number): Observable<any> {
        return this.dataStorageService.InviaRichiesta("GET", "/classe/" + classeId)!.pipe(
            tap((data: any) => {
                this.classeSelected = new Classe(
                    data.Id,
                    data.Classe,
                    data.Sezione,
                    data.Indirizzo,
                    data.Coordinatore_Email,
                    new Date(data.Anno_Scolastico)
                );
            })
        );
    }

    GetAnniScolastici(idClasse: number | null = null): Observable<any> {
        let params: any = {};

        if (idClasse) {
            params.Id = idClasse;
        }
        else {
            if (this.docentiService.docente.Ruolo != Ruolo.ADMIN) {
                const filtroDocente = {
                    some: {
                        Docente_Email: this.docentiService.docente.Email
                    }
                };
                params["Insegnamenti"] = JSON.stringify(filtroDocente);
            }

            if (this.indirizzoSelected)
                params["Indirizzo"] = this.indirizzoSelected;
        }


        return this.dataStorageService.InviaRichiesta("GET", "/anni-scolastici", params)!.pipe(tap(
            (data: any) => {
                this.anniScolastici = Array.from(data).map((item: any) => new Date(item));
                //console.log(new Date(data), new Date(data).getFullYear().toString());
            }
        ));
    }

    GetNumeroClassi() {
        let cont = 0;

        for (const anno of Object.values(this.classi)) {
            cont += (anno as any[]).length;
        }

        this.nClassi = cont;
    }

    GetStudenti(classeId: number = 0, searchTerm: string = "", DSA_BES: number = -1, order: any = {}): Observable<any> {

        let filters: any = {};

        if (classeId != 0) {
            filters = {
                Classi_Studente: {
                    some: {
                        Classe_Id: classeId
                    }
                }
            }
        }

        if (searchTerm) {
            filters.OR = [
                { Nome: { contains: searchTerm, mode: 'insensitive' } },
                { Cognome: { contains: searchTerm, mode: 'insensitive' } },
                { Email: { contains: searchTerm, mode: 'insensitive' } }
            ];
        }

        if (DSA_BES != -1)
            filters.DSA_BES = DSA_BES;


        let params: any = {
            filters: JSON.stringify(filters)
        };

        if (Object.keys(order).length > 0)
            params.order = JSON.stringify({ [order]: "asc" });

        console.log(params);

        return this.dataStorageService.InviaRichiesta("GET", "/studenti", params)!.pipe(
            tap((data: any) => {
                this.studenti = Array.from(data).map((studente: any) => new Studente(
                    studente.Nome,
                    studente.Cognome,
                    studente.Email,
                    studente.DSA_BES
                ));
                console.log(data);
            })
        );
    }

    GetStudenteByEmail(email: string): Observable<any> {
        return this.dataStorageService.InviaRichiesta("GET", "/studente/" + email)!.pipe(tap((data: any) => {
            return new Studente(
                data.Nome,
                data.Cognome,
                data.Email,
                data.DSA_BES
            );
        })
        );
    }

    GetStudentiNoDocumento(classeId: number): Observable<any> {
        let filters = {};

        if (classeId != 0) {
            filters = {
                Classi_Studente: {
                    some: {
                        Classe_Id: classeId
                    }
                }
            }
        }

        return this.dataStorageService.InviaRichiesta("GET", "/studenti-no-doc", { filters: JSON.stringify(filters) })!.pipe(tap((data: any) => {
            this.studentiNoDoc = data.map((studente: Studente) => new Studente(studente.Nome, studente.Cognome, studente.Email, studente.DSA_BES));
        }));
    }

    GetNumeroStudenti(classeId: number): Observable<any> {
        const filters: any = {
            Classe_Id: classeId
        }

        return this.dataStorageService.InviaRichiesta("GET", "/count-studenti", { filters: JSON.stringify(filters) })!;
    }
}
