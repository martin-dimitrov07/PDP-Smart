import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LoginService } from '../../shared/services/login.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';

declare const google: any;

@Component({
    selector: 'app-login-form',
    standalone: true,
    templateUrl: './login-form.html',
    styleUrl: './login-form.css',
})
export class LoginForm {
    private readonly loginService = inject(LoginService);
    private platformId = inject(PLATFORM_ID); //variabile per capire se browser o server
    private static isInitialized = false; //static così mantiene il suo valore

    private router: Router = inject(Router);

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {  //solo se file eseguito da browser
            this.InitializeGoogle();
        }
    }

    private InitializeGoogle() {
        const interval = setInterval(() => {
            if (typeof google != 'undefined') {
                if (!LoginForm.isInitialized) {
                    // Configura le opzioni di Google Identity Services
                    google.accounts.id.initialize({
                        client_id: environment.googleClientId,
                        callback: (res: any) => this.HandleLogin(res),
                        // Impediamo a Google di scegliere un account a caso senza l'intervento dell'utente
                        auto_select: true
                    });

                    const buttonContainers = document.getElementsByClassName("myGoogleDiv")
                    for (const btn of buttonContainers) {
                        btn!.innerHTML = ""
                        google.accounts.id.renderButton(
                            btn,
                            {
                                "theme": "outline",
                                "size": "large",
                                "type": "standard",
                                "text": "continue_with",
                                "shape": "rectangular",
                                "logo_alignment": "center",
                                "width": "250"
                            }
                        );
                    }

                    LoginForm.isInitialized = true;
                }

                clearInterval(interval);
            }
        }, 500);
    }

    HandleLogin(response: any) {
        if (response.credential) {
            console.log("ACCESSO PDP-SMART ESEGUITO!");

            const token = response.credential;

            // stampa token creato da google
            console.log("TOKEN JWT:", token);

            // invierà il token al nostro server
            this.loginService.Login(token);
        }
    }
}