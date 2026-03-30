import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LoginService } from '../../shared/services/login.service';
import { Router } from '@angular/router';

declare var google: any;

@Component({
    selector: 'app-login-form',
    standalone: true,
    templateUrl: './login-form.html',
    styleUrl: './login-form.css',
})
export class LoginForm implements OnInit {
    private loginService = inject(LoginService);
    private platformId = inject(PLATFORM_ID); //variabile per capire se browser o server
    private static isInitialized = false; //static così mantiene il suo valore

    private router: Router = inject(Router);

    ngOnInit() {
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
                        client_id: '347150437093-4tp8ucj4t6slqj78htvu3gert4tk4isj.apps.googleusercontent.com',
                        callback: (res: any) => this.handleLogin(res),
                        // Impediamo a Google di scegliere un account a caso senza l'intervento dell'utente
                        auto_select: true
                    });

                    // renderizza il bottone nascosto
                    google.accounts.id.renderButton(
                        document.getElementById("googleBtn"),
                        {
                            theme: "outline",
                            size: "large",
                            width: document.getElementById("googleBtn")?.offsetWidth
                        }
                    );

                    LoginForm.isInitialized = true;
                }

                clearInterval(interval);
            }
        }, 500);
    }

    signInWithGoogle() {
        if (typeof google != 'undefined') {
            google.accounts.id.prompt();
            console.log("Login eseguito correttamente");
        }
    }


    handleLogin(response: any) {
        if (response.credential) {
            console.log("ACCESSO PDP-SMART ESEGUITO!");

            const token = response.credential;

            // stampa token creato da google
            console.log("TOKEN JWT:", token);

            // invierà il token al nostro server
            this.loginService.Login(token).subscribe({
                next: (data: any) => {
                    this.router.navigate(["/"]);
                },
                error: (err: any) => {
                    console.log(err);

                    if(err.status == 401)
                        console.error("Login non valido")
                    else
                        console.error(err.status + ": " + err.error);
                }
            });
        }
    }
}