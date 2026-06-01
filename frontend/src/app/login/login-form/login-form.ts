import { Component, Input, OnInit, PLATFORM_ID, SimpleChanges, inject } from '@angular/core';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { LoginService } from '../../shared/services/login.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { DocentiService } from '../../shared/services/docenti.service';

declare const google: any;

@Component({
    selector: 'app-login-form',
    standalone: true,
    templateUrl: './login-form.html',
    styleUrl: './login-form.css',
    imports: [NgClass],
})
export class LoginForm {
    isLoading: boolean = true;

    private readonly loginService = inject(LoginService);
    private platformId = inject(PLATFORM_ID);
    private router: Router = inject(Router);

    private static googleInitialized = false;

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            const checkGoogle = setInterval(() => {
                if (typeof google != 'undefined') {
                    clearInterval(checkGoogle);
                    this.setupAndRenderGoogle();
                }
            }, 100);
        }
    }

    private setupAndRenderGoogle() {
        if (!LoginForm.googleInitialized) {
            google.accounts.id.initialize({
                client_id: environment.googleClientId,
                callback: (response: any) => this.loginWithGoogle(response),
                auto_select: false
            });
            LoginForm.googleInitialized = true;
        }

        this.renderGoogleButton();
    }

    private renderGoogleButton() {
        this.isLoading = true;
        const buttonContainers = document.getElementsByClassName("myGoogleDiv");
        for (const btn of Array.from(buttonContainers)) {
            btn.innerHTML = "";

            google.accounts.id.renderButton(
                btn,
                {
                    "theme": "outline",
                    "size": "large",
                    "type": "standard",
                    "text": "continue_with",
                    "shape": "rectangular",
                    "logo_alignment": "center",
                }
            );
        }

        setTimeout(() => {
            this.isLoading = false;
        }, 100);
    }

    loginWithGoogle(response: any) {
        if (response.credential) {
            const token = response.credential;

            // stampa token creato da google
            // console.log("TOKEN JWT:", token);

            // invierà il token al nostro server
            this.loginService.Login(token).subscribe({
                "next": (data: any) => {
                    this.router.navigate(["/indirizzi"]);
                },
                "error": (err: any) => {
                    if (err.status == 401)
                        console.error("Login non valido")
                    else
                        console.error(err.status + ": " + err.error);
                }
            });
        }
    }
}