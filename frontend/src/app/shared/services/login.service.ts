import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DataStorageService } from './data-storage.service';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    private dataStorageService: DataStorageService = inject(DataStorageService);

    docente = {};

    //chiamata post per maggior sicurezza
    Login(token: string): Observable<any> {
        return this.dataStorageService.InviaRichiesta("POST", "/login", token)!
            .pipe(tap((data: any) => {
                this.docente = data;
                console.log(this.docente);
            }));
    }
}
