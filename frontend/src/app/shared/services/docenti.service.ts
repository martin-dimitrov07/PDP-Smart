import { inject, Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DocentiService {
    private readonly dataStorageService = inject(DataStorageService);

    emailDocente: string = "";

    GetEmailDocente() {
        return this.dataStorageService.InviaRichiesta("GET", "/email-docente")!
            .pipe(tap((data: any) => {  //pipe: intercetta //tap: legge dati   
                this.emailDocente = data;
                console.log(this.emailDocente);
            }));
    }
}
