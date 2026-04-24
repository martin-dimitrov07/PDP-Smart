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

    userImgPath: string | undefined = undefined;

    ngOnInit(){
        setTimeout(() => {
            this.userImgPath = this.docentiService.docente.FotoUrl;
        }, 300)
    }

    logout() {
        this.loginService.Logout().subscribe({
            "next": () => {
                this.router.navigate(["login"]);
            },
            "error": (error: any) => {
                console.log(error);
                this.router.navigate(["login"]);
            }
        })
    }
}
