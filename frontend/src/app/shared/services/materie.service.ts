import { inject, Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { Ruolo } from '../../models/docente';
import { DocentiService } from './docenti.service';
import { ClassiService } from './classi.service';
import { map, of, switchMap, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MaterieService {
    private readonly dataStorageService: DataStorageService = inject(DataStorageService);
    private readonly docentiService: DocentiService = inject(DocentiService);
    private readonly classiService: ClassiService = inject(ClassiService);

    materieDocente: string[] = [];
    materieClasse: string[] = [];

    GetMaterieDocente() {
        this.materieDocente = [];

        let filtersObservable;

        if (this.docentiService.docente.Ruolo == Ruolo.DOCENTE) {
            const filters = {
                Insegnamenti: {
                    some: {
                        Docente_Email: this.docentiService.docente.Email,
                        Classe_Id: this.classiService.classeSelected!.Id
                    }
                }
            };
            filtersObservable = of(filters);

        } else if (this.docentiService.docente.Ruolo == Ruolo.COORDINATORE) {
            filtersObservable = this.classiService.GetClassiCoordinatore(this.docentiService.docente.Email).pipe(
                map((data: any) => {
                    const isCoordinatore = Object.values(data).some((vettore: any) =>
                        vettore.some((classe: any) => classe.Id == this.classiService.classeSelected!.Id)
                    );

                    if (!isCoordinatore) {
                        return {
                            Insegnamenti: {
                                some: {
                                    Docente_Email: this.docentiService.docente.Email,
                                    Classe_Id: this.classiService.classeSelected!.Id
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

    GetMaterieClasse() {
        if (!this.classiService.classeSelected)
            return of(null);

        this.materieClasse = [];

        console.log(this.classiService.classeSelected);
        const filters = {
            Insegnamenti: {
                some: {  // serve per relazioni uno a molti
                    Classe_Id: this.classiService.classeSelected.Id,
                }
            }
        };

        let params = {};

        if (filters) {
            params = {
                filters: JSON.stringify(filters)
            }
        }

        return this.dataStorageService.InviaRichiesta("GET", "/materie", params)!.pipe(tap((data: any) => {
            this.materieClasse = Array.from(data).map((item: any) => item.Nome);
            console.log(this.materieClasse);
        }));
    }
}
