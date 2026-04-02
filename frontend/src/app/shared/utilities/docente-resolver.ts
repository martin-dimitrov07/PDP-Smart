import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { DocentiService } from '../services/docenti.service';
import { catchError, map, of } from 'rxjs';

export const docenteResolver: ResolveFn<boolean> = (route, state) => {
    const docentiService: DocentiService = inject(DocentiService);
    const router = inject(Router);

    // Angular aspetterà che l'Observable emetta un valore prima di attivare la rotta.
    return docentiService.GetDocente().pipe(
        map((data: any) => {
            console.log('Dati docente caricati:', data);
            return true; 
        }),
        catchError((err) => {
            if (err.status === 401) {
                console.error("Non autorizzato, reindirizzamento...");
                router.navigate(["login"]);
            } else {
                console.error(err.status + ": " + err.error);
            }
            // Ritorna false per bloccare la navigazione
            return of(false);
        })
    );
};