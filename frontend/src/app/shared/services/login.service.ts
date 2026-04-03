import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
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
    Login(token: string) {
        this.dataStorageService.InviaRichiesta("POST", "/login", { token })?.subscribe({
            next: (data: any) => {
                this.router.navigate(["/indirizzi"]);
            },
            error: (err: any) => {
                if (err.status == 401)
                    console.error("Login non valido")
                else
                    console.error(err.status + ": " + err.error);
            }
        });
    }
}
