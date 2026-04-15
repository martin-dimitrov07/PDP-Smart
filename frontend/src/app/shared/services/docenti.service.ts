import { inject, Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { catchError, map, Observable, of } from 'rxjs';
import { Docente } from '../../models/docente';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class DocentiService {
    private readonly dataStorageService: DataStorageService = inject(DataStorageService);
    private readonly router: Router = inject(Router);

    public docente: Docente = {} as Docente;
    public fotoUrl?: string;

    GetDocente(): Observable<boolean> {
        return this.dataStorageService.InviaRichiesta("GET", "/email-docente")!.pipe(
            map((data: any) => {
                // Se arriviamo qui, la chiamata è riuscita
                console.log(data);
                this.docente = new Docente(data.docente.Nome, data.docente.Cognome, data.docente.Email, data.docente.Ruolo, data.fotourl);
                console.log("Docente caricato:", this.docente);
                return true; // Questo valore verrà emesso dall'Observable
            }),
            catchError((err) => {
                // Gestione errore
                if (err.status === 401) {
                    this.router.navigate(["login"]);
                }
                console.error(err.status + ": " + err.error);
                return of(false);
            })
        );
    }
}
