import { inject, Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { Studente } from '../../models/studente';
import { Observable, tap } from 'rxjs';
import { CheckError } from '../utilities/check-error';

@Injectable({
    providedIn: 'root',
})
export class StudentiService {
    private readonly dataStorageService: DataStorageService = inject(DataStorageService);
    public readonly checkError: CheckError = inject(CheckError);

    studenti: Studente[] = [];
    studentiNoDoc: Studente[] = [];
    studenteSelected: Studente = {} as Studente;

    GetStudenti(classeId: number = 0, searchTerm: string = "", DSA_BES: number = -1, order: any = {}): Observable<any> {

        let filters: any = {};

        if (classeId != 0) {
            filters = {
                Classi_Studente: {
                    some: {
                        Classe_Id: classeId
                    }
                }
            }
        }

        if (searchTerm) {
            filters.OR = [
                { Nome: { contains: searchTerm, mode: 'insensitive' } },
                { Cognome: { contains: searchTerm, mode: 'insensitive' } },
                { Email: { contains: searchTerm, mode: 'insensitive' } }
            ];
        }

        if (DSA_BES != -1)
            filters.DSA_BES = DSA_BES;


        let params: any = {
            filters: JSON.stringify(filters)
        };

        if (Object.keys(order).length > 0)
            params.order = JSON.stringify({ [order]: "asc" });

        console.log(params);

        return this.dataStorageService.InviaRichiesta("GET", "/studenti", params)!.pipe(
            tap((data: any) => {
                this.studenti = Array.from(data).map((studente: any) => new Studente(
                    studente.Nome,
                    studente.Cognome,
                    studente.Email,
                    studente.DSA_BES
                ));
                console.log(data);
            })
        );
    }

    GetStudenteByEmail(email: string): Observable<any> {
        return this.dataStorageService.InviaRichiesta("GET", "/studente/" + email)!.pipe(tap((data: any) => {
            return new Studente(
                data.Nome,
                data.Cognome,
                data.Email,
                data.DSA_BES
            );
        })
        );
    }

    GetStudentiNoDocumento(classeId: number): Observable<any> {
        let filters = {};

        if (classeId != 0) {
            filters = {
                Classi_Studente: {
                    some: {
                        Classe_Id: classeId
                    }
                }
            }
        }

        return this.dataStorageService.InviaRichiesta("GET", "/studenti-no-doc", { filters: JSON.stringify(filters) })!.pipe(tap((data: any) => {
            this.studentiNoDoc = data.map((studente: Studente) => new Studente(studente.Nome, studente.Cognome, studente.Email, studente.DSA_BES));
        }));
    }

    GetNumeroStudenti(classeId: number): Observable<any> {
        const filters: any = {
            Classe_Id: classeId
        }

        return this.dataStorageService.InviaRichiesta("GET", "/count-studenti", { filters: JSON.stringify(filters) })!;
    }
}
