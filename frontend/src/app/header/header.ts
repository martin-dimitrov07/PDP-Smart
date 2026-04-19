import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DocentiService } from '../shared/services/docenti.service';
import { LoginService } from '../shared/services/login.service';

@Component({
    selector: 'app-header',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './header.html',
    styleUrl: './header.css',
})
export class Header {
    public readonly docentiService: DocentiService = inject(DocentiService);
    private readonly loginService: LoginService = inject(LoginService);
    private readonly router: Router = inject(Router);

    logout() {
        this.loginService.Logout().subscribe({
            "next": () => {
                alert("Sessione chiusa correttamente");
                this.router.navigate(["login"]);
            },
            "error": (error: any) => {
                console.log(error);
                alert("Token scaduto eseguire login");
                this.router.navigate(["login"]);
            }
        })
    }
}
