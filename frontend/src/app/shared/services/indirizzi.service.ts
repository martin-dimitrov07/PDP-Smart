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
        const params = {
            distinct: "Indirizzo"
        }

        // console.log(this.docentiService.docente);

        return this.dataStorageService.InviaRichiesta("GET", "/indirizzi", params)!.pipe(tap((data: any) => {
            this.indirizzi = Array.from(data).map((item: any) => item.Indirizzo);
            console.log(this.indirizzi);
        }));
    }
}
