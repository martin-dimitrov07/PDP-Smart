import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DataStorageService } from './data-storage.service';
import { LoginService } from './login.service';
import { Studente } from '../../models/studente';

@Injectable({
    providedIn: 'root',
})
export class StudentiService {
    private dataStorageService = inject(DataStorageService);
    private loginService: LoginService = inject(LoginService);
    
    sezioni: string[] = [];
    sezioneSelected: string = "";
    classe: string = "";
    studenti: Studente[] = [];

    GetSections(): Observable<any> {
        const filters = {
            Insegnamenti: {
                some: {  // serve per relazioni uno a molti
                    Docente_Email: this.loginService.docente.Email
                }
            }
        };

        return this.dataStorageService.InviaRichiesta("GET", "/sezioni", { filters, "distinct": "Sezione" })!
            .pipe(tap((data: any) => {  //pipe: intercetta //tap: legge dati   
                this.sezioni = data;
                console.log(this.sezioni);
            }));
    }

}
