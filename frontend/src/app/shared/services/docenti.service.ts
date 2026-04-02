import { inject, Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { Observable, tap } from 'rxjs';
import { Docente } from '../../models/docente';

@Injectable({
    providedIn: 'root',
})
export class DocentiService {
    private readonly dataStorageService: DataStorageService = inject(DataStorageService);

    public docente: Docente = {} as Docente;

    //chiamata post per maggior sicurezza
    GetDocente(): Observable<any> {
        return this.dataStorageService.InviaRichiesta("GET", "/email-docente")!
            .pipe(tap((data: any) => {
                this.docente = new Docente(data.Nome, data.Cognome, data.Email, data.Ruolo);
            }));
    }
}
