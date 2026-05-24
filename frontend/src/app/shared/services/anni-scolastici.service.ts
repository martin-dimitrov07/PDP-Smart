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

            if (this.indirizziService.indirizzoSelected)
                params["Indirizzo"] = this.indirizziService.indirizzoSelected;
        }


        return this.dataStorageService.InviaRichiesta("GET", "/anni-scolastici-studenti", params)!.pipe(tap(
            (data: any) => {
                this.anniScolastici = Array.from(data).map((item: any) => new Date(item));
            }
        ));
    }
}
