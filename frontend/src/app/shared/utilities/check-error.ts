import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class CheckError {
    private readonly router: Router = inject(Router);

    checkError(err: any) {
        if (err.status == 401)
            this.router.navigate(["/login"]);
        else
            console.error("Errore API:", err.status, err.error);    
    }
}
