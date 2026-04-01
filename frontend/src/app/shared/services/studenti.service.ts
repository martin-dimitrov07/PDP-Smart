import { inject, Injectable } from '@angular/core';
import { distinct, Observable, tap } from 'rxjs';
import { DataStorageService } from './data-storage.service';
import { LoginService } from './login.service';
import { Studente } from '../../models/studente';

@Injectable({
    providedIn: 'root',
})
export class StudentiService {
    private readonly dataStorageService = inject(DataStorageService);
    private readonly loginService: LoginService = inject(LoginService);
    
<<<<<<< HEAD
    sezioni: string[] = [];
    sezioneSelected: string = "";
    classe: string = "";
    studenti: Studente[] = [];

    GetSections(): Observable<any> {
        const filters = {
=======
    indirizzi: string[] = [];
    indirizzoSelected: string = "";
    classe: string = "";
    studenti: Studente[] = [];

    GetIndirizzi(): Observable<any> {
        const filters = this.loginService.docente.Ruolo == "Docente" ? {
>>>>>>> main
            Insegnamenti: {
                some: {  // serve per relazioni uno a molti
                    Docente_Email: this.loginService.docente.Email
                }
            }
        } : { };

        const params = {
            filters: JSON.stringify(filters),
            distinct: "Indirizzo"
        }

        console.log(filters);

        return this.dataStorageService.InviaRichiesta("GET", "/indirizzi", params)!
            .pipe(tap((data: any) => {  //pipe: intercetta //tap: legge dati   
                this.indirizzi = Array.from(data).map((ind: any) => ind.Indirizzo);
                console.log(this.indirizzi);
            }));
    }
}
