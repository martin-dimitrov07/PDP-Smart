import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DocentiService } from '../shared/services/docenti.service';
import { LoginService } from '../shared/services/login.service';
import { Ruolo } from '../models/docente';
import { DocumentiService } from '../shared/services/documenti.service';

@Component({
    selector: 'app-header',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './header.html',
    styleUrl: './header.css',
})
export class Header {
    public readonly docentiService: DocentiService = inject(DocentiService);
    private readonly documentiService: DocumentiService = inject(DocumentiService);
    private readonly loginService: LoginService = inject(LoginService);
    private readonly router: Router = inject(Router);

    userImgPath: string | undefined = undefined;

    ngOnInit() {
        setTimeout(() => {
            this.userImgPath = this.docentiService.docente.FotoUrl;
        }, 500)
    }

    logout() {
        this.loginService.Logout().subscribe({
            "next": () => {
                this.documentiService.ResetFiltriDocumenti();
                this.router.navigate(["login"]);
            },
            "error": (error: any) => {
                console.log(error);
                this.router.navigate(["login"]);
            }
        })
    }

    get routesDocumento(): string[] {
        return this.docentiService.docente.Ruolo == Ruolo.DOCENTE
            ? ['/documenti', 'lista']
            : ['/documenti'];
    }
}
