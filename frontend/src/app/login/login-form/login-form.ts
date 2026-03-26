import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// Dichiariamo l'oggetto globale 'google' caricato tramite lo script nell'index.html
// Serve a TypeScript per capire che 'google' esiste anche se non è importato come pacchetto
declare var google: any;

@Component({
    selector: 'app-login-form',
    standalone: true,
    templateUrl: './login-form.html',
    styleUrl: './login-form.css',
})
export class LoginForm implements OnInit {
    // Iniezione del servizio per identificare la piattaforma (Browser vs Server/SSR)
    private platformId = inject(PLATFORM_ID);
    
    // Variabile 'static' (legata alla classe, non all'istanza): 
    // memorizza se l'inizializzazione è già avvenuta per non ripeterla mai più
    private static isInitialized = false;

    ngOnInit() {
        // Eseguiamo i controlli solo se l'utente è su un browser, altrimenti google non esiste
        if (isPlatformBrowser(this.platformId)) {
            this.tryInitializeGoogle();
        }
    }

    private tryInitializeGoogle() {
        // Avviamo un ciclo ogni 100ms per attendere che lo script Google sia pronto nel DOM
        const interval = setInterval(() => {
            // Se l'oggetto google è stato caricato correttamente dallo script esterno
            if (typeof google != 'undefined') {
                
                // Entriamo solo se è la prima volta assoluta che l'app carica questo componente
                if (!LoginForm.isInitialized) {
                    // Configura le opzioni di Google Identity Services
                    google.accounts.id.initialize({
                        // ID del progetto Google Cloud per collegare l'app al server Google
                        client_id: '347150437093-4tp8ucj4t6slqj78htvu3gert4tk4isj.apps.googleusercontent.com',
                        // Specifichiamo quale funzione chiamare una volta ricevuto il token di accesso
                        callback: (res: any) => this.handleLogin(res),
                        // Disabilitiamo FedCM per evitare che Chrome blocchi il popup su localhost
                        use_fedcm_for_prompt: false,
                        // Impediamo a Google di scegliere un account a caso senza l'intervento dell'utente
                        auto_select: false 
                    });
                    // Blocchiamo future inizializzazioni impostando il flag a true
                    LoginForm.isInitialized = true;
                }
                
                // Fermiamo il timer perché Google è configurato e pronto
                clearInterval(interval);
            }
        }, 100);
    }

    /**
     * Apre il popup di login (collegato al click del bottone nell'HTML)
     */
    signInWithGoogle() {
        // Verifichiamo la presenza di google per sicurezza prima del click
        if (typeof google != 'undefined') {
            // RESET COOKIE: Cancelliamo 'g_state' per sbloccare Google se l'utente ha chiuso il popup troppe volte
            document.cookie = "g_state=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            
            // RESET PROCESSI: Chiudiamo ogni richiesta precedente ancora attiva per pulire il flusso
            google.accounts.id.cancel();

            // DELAY TECNICO: Aspettiamo 100ms per dare tempo a Chrome di resettare la sessione
            // e prevenire l'errore "AbortError" (segnale interrotto) su localhost
            setTimeout(() => google.accounts.id.prompt(), 100);
        }
    }

    /**
     * Riceve il Token JWT da Google dopo che l'utente ha scelto l'account
     */
    handleLogin(response: any) {
        // Se la risposta contiene la credenziale (il token JWT criptato)
        if (response.credential) {
            // Messaggio di log per conferma avvenuto login lato client
            console.log("ACCESSO PDP-SMART ESEGUITO!");
            // Stampiamo il token JWT: è la stringa che identifica il docente e va validata lato backend
            console.log("TOKEN JWT:", response.credential);
        }
    }
}