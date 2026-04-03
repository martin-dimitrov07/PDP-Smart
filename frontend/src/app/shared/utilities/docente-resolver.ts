import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DocentiService } from '../services/docenti.service';

export const docenteResolver: ResolveFn<boolean> = (route, state) => {
    const docentiService: DocentiService = inject(DocentiService);

    // Angular aspetterà che l'Observable emetta un valore prima di attivare la rotta.
    return docentiService.GetDocente();
};