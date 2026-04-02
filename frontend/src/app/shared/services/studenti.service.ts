import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DataStorageService } from './data-storage.service';
import { Studente } from '../../models/studente';
import { Classe } from '../../models/classe';
import { Docente, Ruolo } from '../../models/docente';
import { DocentiService } from './docenti.service';

@Injectable({
    providedIn: 'root',
})
export class StudentiService {
    private readonly dataStorageService = inject(DataStorageService);

    private readonly docentiService: DocentiService = inject(DocentiService);

    indirizzi: string[] = [];
    indirizzoSelected?: string;

    classi: Classe[] = [];
    classeSelected: string = "";

    studenti: Studente[] = [];

    GetIndirizzi(): Observable<any> {
        const filters = this.docentiService.docente.Ruolo == Ruolo.DOCENTE ? {
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

        return this.dataStorageService.InviaRichiesta("GET", "/indirizzi", params)!
            .pipe(tap((data: any) => {  //pipe: intercetta //tap: legge dati   
                this.indirizzi = Array.from(data).map((ind: any) => ind.Indirizzo);
                // console.log(this.indirizzi);
            }));
    }

    GetClassi(): Observable<any> {
        const filters = this.docentiService.docente.Ruolo == Ruolo.DOCENTE ? {
            Insegnamenti: {
                some: {  // serve per relazioni uno a molti
                    Docente_Email: this.docentiService.docente.Email
                }
            },
            Indirizzo: this.indirizzoSelected
        } : {
            Indirizzo: this.indirizzoSelected
        };

        const params = {
            filters: JSON.stringify(filters)
        }

        console.log(filters);

        return this.dataStorageService.InviaRichiesta("GET", "/classi", params)!
            .pipe(tap((data: any) => {  //pipe: intercetta //tap: legge dati   
                this.classi = Array.from(data).map((classe: any) => new Classe(classe.Id, classe.Classe, classe.Sezione, classe.Indirizzo, classe.Anno_Scolastico));
                console.log(data);
                console.log(this.classi);
            }));
    }
}
