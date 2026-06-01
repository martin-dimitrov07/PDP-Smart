import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DocentiService } from './docenti.service';
import { IndirizziService } from './indirizzi.service';
import { Ruolo } from '../../models/docente';
import { DataStorageService } from './data-storage.service';

@Injectable({
    providedIn: 'root',
})
export class AnniScolasticiService {
    private readonly dataStorageService: DataStorageService = inject(DataStorageService);
    private readonly docentiService: DocentiService = inject(DocentiService);
    private readonly indirizziService: IndirizziService = inject(IndirizziService);

    anniScolastici: Date[] = [];

    GetAnniScolasticiStudenti(idClasse: number | null = null): Observable<any> {
        const filters: any = {};

        if (idClasse) {
            filters.Classe_Id = idClasse;
        }

        if (this.docentiService.docente.Ruolo != Ruolo.ADMIN) {
            filters.Insegnamenti = {
                some: {
                    Docente_Email: this.docentiService.docente.Email
                }
            };
        }

        const params = {
            filters: JSON.stringify(filters)
        };

        return this.dataStorageService.InviaRichiesta("GET", "/anni-scolastici-studenti", params)!.pipe(tap(
            (data: any) => {
                this.anniScolastici = Array.from(data).map((item: any) => new Date(item));
            }
        ));
    }

    GetAnniScolasticiDocumenti(): Observable<any> {
        this.anniScolastici = [];

        let filters: any = {};

        if (this.docentiService.docente.Ruolo != Ruolo.ADMIN) {
            filters.Docente_Email = this.docentiService.docente.Email;
        }

        return this.dataStorageService.InviaRichiesta("GET", "/anni-scolastici-documenti", { filters })!.pipe(
            tap((data: any) => {
                this.anniScolastici = Array.from(data).map((item: any) => new Date(item));
            })
        );
    }
}
