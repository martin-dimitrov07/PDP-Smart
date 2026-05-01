import { CanActivateChildFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { DocentiService } from '../services/docenti.service';
import { map } from 'rxjs';

export const ruoloDocenteGuard: CanActivateChildFn = (route) => {
    const docentiService: DocentiService = inject(DocentiService);
    const router = inject(Router);

    const ruolo = docentiService.docente.Ruolo;
    const allowedRoles = route.data['roles'];

    return allowedRoles.includes(ruolo)
        ? true
        : router.createUrlTree(['404']);
};