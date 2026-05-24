import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DataStorageService } from './data-storage.service';
import { DocentiService } from './docenti.service';
import { Ruolo } from '../../models/docente';

@Injectable({
    providedIn: 'root',
})
export class IndirizziService {
    private readonly dataStorageService: DataStorageService = inject(DataStorageService);
    private readonly docentiService: DocentiService = inject(DocentiService);

    indirizzi: string[] = [];
    indirizzoSelected?: string;

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
}
