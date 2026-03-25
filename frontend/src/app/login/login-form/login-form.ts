import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// Dichiariamo 'google' come variabile globale per evitare errori di compilazione TypeScript,
// dato che lo script viene caricato esternamente nell'index.html
declare var google: any;

@Component({
    selector: 'app-login-form',
    standalone: true,
    templateUrl: './login-form.html',
    styleUrl: './login-form.css',
})
export class LoginForm implements OnInit {
    // Iniettiamo l'identificativo della piattaforma (Browser o Server)
    private platformId = inject(PLATFORM_ID);

    // Variabile statica: resta in memoria per tutta la durata dell'app.
    // Ci serve per evitare di chiamare .initialize() più di una volta e causare Warning.
    private static isInitialized = false;

    ngOnInit() {
        // Verifichiamo di essere nel Browser. Se siamo sul Server (SSR), 
        // l'oggetto 'window' e 'google' non esistono e l'app andrebbe in crash.
        if (isPlatformBrowser(this.platformId)) {
            this.tryInitializeGoogle();
        }
    }

    private tryInitializeGoogle() {
        // Creiamo un timer che controlla ogni 100ms se lo script di Google è stato caricato
        const interval = setInterval(() => {
            // Se l'oggetto 'google' è presente in memoria...
            if (typeof google != 'undefined') {

                // Controllo anti-warning: inizializziamo solo se non è già stato fatto in precedenza
                if (!LoginForm.isInitialized) {
                    google.accounts.id.initialize({
                        // Il tuo ID cliente ottenuto dalla Google Cloud Console
                        client_id: '347150437093-4tp8ucj4t6slqj78htvu3gert4tk4isj.apps.googleusercontent.com',

                        // La funzione (callback) da eseguire quando l'utente completa il login
                        callback: (res: any) => this.handleLogin(res),

                        // Disabilita l'API FedCM nativa di Chrome. Questo impedisce al browser di 
                        // bloccare automaticamente il sito se l'utente chiude il popup più volte,
                        // forzando l'uso del classico (e più permissivo) popup di Google.
                        use_fedcm_for_prompt: false,

                        // auto_select: false impedisce a Google di loggare l'utente automaticamente senza clic
                        auto_select: false
                    });

                    // Segnamo che l'inizializzazione è avvenuta con successo
                    LoginForm.isInitialized = true;
                }

                // Una volta configurato tutto, fermiamo il timer per risparmiare risorse
                clearInterval(interval);
            }
        }, 100);
    }

    /**
     * Metodo collegato al click del tuo bottone HTML personalizzato.
     */
    signInWithGoogle() {
        // L'operatore ?. (optional chaining) evita crash se il metodo viene chiamato 
        // prima che 'google' sia effettivamente pronto.
        // .prompt() apre il selettore degli account Google.
        google?.accounts.id.prompt();
    }

    /**
     * Gestisce la risposta inviata dai server di Google dopo il login.
     * param response Contiene il credential (il JWT Token)
     */
    handleLogin(response: any) {
        // Messaggio di conferma per il debug
        console.log("Accesso PDP-Smart eseguito!");

        // response.credential è la stringa criptata che contiene i dati del docente.
        // Questa stringa andrà inviata al backend per la verifica finale.
        console.log("Token ricevuto:", response.credential);

        // TODO: Inserire qui la logica di reindirizzamento (es. Router.navigate)
    }
}