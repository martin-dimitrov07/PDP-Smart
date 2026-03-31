import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DataStorageService } from './data-storage.service';
import { Docente } from '../../models/docente';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    private readonly dataStorageService: DataStorageService = inject(DataStorageService);

    docente: Docente = {} as Docente;

    //chiamata post per maggior sicurezza
    Login(token: string): Observable<any> {
        return this.dataStorageService.InviaRichiesta("POST", "/login", { token })!
            .pipe(tap((data: any) => {
                this.docente = data;
                console.log(this.docente);
            }));
    }
}
