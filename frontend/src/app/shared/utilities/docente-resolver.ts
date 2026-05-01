import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DocentiService } from '../services/docenti.service';
import { catchError, of } from 'rxjs';
import { Router } from '@angular/router';
import { Docente } from '../../models/docente';

export const docenteResolver: ResolveFn<boolean> = (route, state) => {
    const docentiService: DocentiService = inject(DocentiService);

    // Angular aspetterà che l'Observable emetta un valore prima di attivare la rotta.
    return docentiService.GetDocente();
};