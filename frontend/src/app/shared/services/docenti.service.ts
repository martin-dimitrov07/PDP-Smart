import { inject, Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { Docente, Ruolo } from '../../models/docente';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class DocentiService {
    private readonly dataStorageService: DataStorageService = inject(DataStorageService);
    private readonly router: Router = inject(Router);

    public docente: Docente = {} as Docente;

    GetDocente(): Observable<boolean> {
        return this.dataStorageService.InviaRichiesta("GET", "/email-docente")!.pipe(
            switchMap((data: any) => {  
                if (data.docente.Ruolo == Ruolo.DOCENTE) {
                    return this.isCoordinatore(data.docente.Email).pipe(
                        map((isCoord) => {
                            if (isCoord) {
                                data.docente.Ruolo = Ruolo.COORDINATORE;
                            }
                            return data; // Passiamo i dati aggiornati allo step successivo
                        })
                    );
                }

                return of(data);
            }),
            map((data: any) => {
                this.docente = new Docente(
                    data.docente.Nome,
                    data.docente.Cognome,
                    data.docente.Email,
                    data.docente.Ruolo,
                    data.fotoUrl
                );
                return true;
            }),
            catchError((err) => {
                if (err.status === 401 || err.status === 403 || err.status === 404) {
                    this.docente = {} as Docente;
                    this.router.navigate(["login"]);
                }
                console.error(err.status + ": " + err.error);
                return of(false);
            })
        );
    }

    private isCoordinatore(email: string): Observable<boolean> {
        return this.dataStorageService.InviaRichiesta("GET", "/is-coordinatore", { email })!.pipe(
            map((response: any) => {
                return response.isCoordinatore;
            }),
            catchError((err) => {
                console.error("Errore durante la verifica del coordinatore:", err);
                return of(false);
            })
        );
    }
}
