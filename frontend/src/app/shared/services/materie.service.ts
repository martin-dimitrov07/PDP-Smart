import { inject, Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { Ruolo } from '../../models/docente';
import { DocentiService } from './docenti.service';
import { ClassiService } from './classi.service';
import { lastValueFrom, map, Observable, of, switchMap, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MaterieService {
    private readonly dataStorageService: DataStorageService = inject(DataStorageService);
    private readonly docentiService: DocentiService = inject(DocentiService);
    private readonly classiService: ClassiService = inject(ClassiService);

    materieEdit: string[] = [];
    materieClasse: string[] = [];

    async GetMaterieEdit(): Promise<Observable<any>> {
        if (!this.docentiService.docente?.Email || !this.classiService.classeSelected?.Id)
            return of(null);

        this.materieEdit = [];

        let filters: any = {
            Insegnamenti: {
                some: {
                }
            }
        };

        const isCoordinatore = await lastValueFrom(this.docentiService.isCoordinatoreClasse(this.classiService.classeSelected.Id));

        if (this.docentiService.docente.Email && !isCoordinatore && this.docentiService.docente.Ruolo != Ruolo.ADMIN) {
            filters.Insegnamenti.some.Docente_Email = this.docentiService.docente.Email;
        }

        if (this.classiService.classeSelected.Id) {
            filters.Insegnamenti.some.Classe_Id = this.classiService.classeSelected.Id;
        }

        return this.dataStorageService.InviaRichiesta("GET", "/materie", { filters: JSON.stringify(filters) })!
            .pipe(
                map((data: any) => {
                    this.materieEdit = Array.from(data).map((item: any) => item.Nome);
                    console.log("Materie caricate:", this.materieEdit);
                    return this.materieEdit;
                })
            )
    }

    GetMaterieClasse(): Observable<any> {
        if (!this.classiService.classeSelected?.Id)
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

        return this.dataStorageService.InviaRichiesta("GET", "/materie", params)!.pipe(map((data: any) => {
            this.materieClasse = Array.from(data).map((item: any) => item.Nome);
            console.log(this.materieClasse);
            return this.materieClasse;
        }));
    }

    GetMaterieDocenteClasse(docenteEmail: any, classeId: number): Observable<string[]> {
        const filters: any = {
            Insegnamenti: {
                some: {
                    Docente_Email: docenteEmail,
                    Classe_Id: classeId
                }
            }
        };

        return this.dataStorageService.InviaRichiesta("GET", "/materie", { filters: JSON.stringify(filters) })!.pipe(map((data: any) => {
            return Array.from(data).map((item: any) => item.Nome);
        }));
    }
}
