import { inject, Injectable } from '@angular/core';
import { DocentiService } from './docenti.service';
import { firstValueFrom, map, Observable, switchMap, tap } from 'rxjs';
import { Ruolo } from '../../models/docente';
import { IndirizziService } from './indirizzi.service';
import { DataStorageService } from './data-storage.service';
import { Classe } from '../../models/classe';
import { StudentiService } from './studenti.service';
import { Documento } from '../../models/documento';

@Injectable({
    providedIn: 'root',
})
export class ClassiService {
    private readonly dataStorageService: DataStorageService = inject(DataStorageService);
    private readonly docentiService: DocentiService = inject(DocentiService);
    private readonly indirizziService: IndirizziService = inject(IndirizziService);
    private readonly studentiService: StudentiService = inject(StudentiService);

    classi: any = {};
    classiNoEmpty: any = {};
    nClassi: number = 0;
    classeSelected: Classe = {} as Classe;

    GetClassi(filterClassi: any, filterAnnoScolastico: any): Observable<any> {
        let filters: any = {};

        // if (this.docentiService.docente.Ruolo != Ruolo.ADMIN) {

        //     if (Studente_Email) {
        //         filters.Insegnamenti.some = {
        //             ...filters.Insegnamenti.some,
        //             Studente_Email: Studente_Email
        //         }
        //     }
        // }

        if (this.indirizziService.indirizzoSelected)
            filters.Indirizzo = this.indirizziService.indirizzoSelected;

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

    GetClassiNoDocNoEmpty(filterAnnoScolastico: any) {
        let filters: any = {};

        if (filterAnnoScolastico)
            filters.Anno_Scolastico = filterAnnoScolastico;

        if (this.docentiService.docente.Ruolo == Ruolo.COORDINATORE) {
            filters = {
                Coordinatore_Email: this.docentiService.docente.Email,
                Classi_Studente: {
                    some: {}
                }
            };
        }

        const params = {
            filters: JSON.stringify(filters)
        }

        return this.dataStorageService.InviaRichiesta("GET", "/classi", params)!.pipe(
            switchMap(async (data: any) => {
                const resultLocal: any = {};

                const groupPromises = Object.keys(data).map(async (key) => {
                    const classesGroup = data[key];

                    const validateClasses = classesGroup.map(async (classe: any) => {
                        const studentiNoDoc = await firstValueFrom(this.studentiService.GetStudentiNoDocumento(classe.Id));
                        if (studentiNoDoc && studentiNoDoc.length > 0) {
                            return classe;
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


    GetNumeroClassi() {
        let cont = 0;

        for (const anno of Object.values(this.classi)) {
            cont += (anno as any[]).length;
        }

        this.nClassi = cont;
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

    GetClassiCoordinatore(docenteEmail: string) {
        const filters = {
            Coordinatore_Email: docenteEmail
        };

        const params = {
            filters: JSON.stringify(filters)
        }

        return this.dataStorageService.InviaRichiesta("GET", "/classi", params)!
    }
}
