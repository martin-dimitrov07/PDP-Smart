import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { DataStorageService } from './data-storage.service';
import { Docente } from '../../models/docente';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    private readonly dataStorageService: DataStorageService = inject(DataStorageService);
    private readonly router: Router = inject(Router);

    //chiamata post per maggior sicurezza
    Login(token:string) {
        return this.dataStorageService.InviaRichiesta("POST", "/login", { token })!
    }
}
