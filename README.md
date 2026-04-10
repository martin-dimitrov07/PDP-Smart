# PDP-Smart 
### La piattaforma digitale per la gestione semplice ed efficace dei PDP degli studenti DSA e BES

**Sviluppato da:** Dimitrov Martin e Martino Lorenzo 

---

## Che cos'è PDP-Smart?
**PDP-Smart** è un'applicazione web creata per risolvere un problema concreto del mondo scolastico: la gestione dei **Piani Didattici Personalizzati (PDP)**. 

Spesso i docenti si trovano a dover compilare documenti lunghi e complessi in formato cartaceo o Word, con il rischio di perdere dati o commettere errori. PDP-Smart digitalizza tutto il processo, permettendo ai professori di creare, aggiornare e consultare i piani dei propri studenti in modo rapido, ordinato e sicuro da qualsiasi dispositivo.

---

## Com'è fatta l'applicazione? (Tecnologie usate)

Abbiamo costruito l'app dividendo il lavoro in due parti principali che comunicano tra loro:

### 1. Il Backend (Il "Cervello")
Questa è la parte che gestisce i dati e la logica, situata nel server.
* **Node.js & Express:** Abbiamo usato questo ambiente per creare il server che riceve le richieste dei docenti.
* **TypeScript:** Un linguaggio che rende il codice più robusto e facile da controllare, riducendo gli errori durante lo sviluppo.
* **PostgreSQL:** Il nostro database relazionale. È come un grande archivio digitale dove tutte le informazioni (studenti, docenti, materie) sono salvate in tabelle collegate tra loro.
* **Prisma ORM:** Uno strumento moderno che fa da "ponte" tra il codice e il database. Ci permette di leggere e scrivere i dati in modo semplice senza dover scrivere lunghe istruzioni in linguaggio SQL.

### 2. Il Frontend (L'Interfaccia Utente)
Questa è la parte che il docente vede e usa sul suo browser.
* **Angular:** Un framework professionale che permette di creare pagine web veloci e dinamiche.
* **Bootstrap:** Lo abbiamo utilizzato per curare il design e rendere l'app "responsive", ovvero capace di adattarsi automaticamente allo schermo di un computer, di un tablet o di uno smartphone.

---

## Come configurare e avviare il progetto

### Passaggio 1: Configurazione del Backend
Il backend deve essere configurato per primo perché contiene il database.

1.  Spostati nella cartella dedicata:
    ```bash
    cd Backend
    ```
2.  Installa tutti i pacchetti necessari:
    ```bash
    npm install
    ```
3.  **Configura il database:** Crea un file chiamato `.env` nella cartella Backend e inserisci il link per connetterti al tuo database PostgreSQL:
    ```env
    DATABASE_URL="postgresql://utente:password@localhost:5432/nome_db?schema=public"
    ```
4.  **Prepara il database:** Esegui questi comandi per creare le tabelle e attivare il collegamento:
    ```bash
    npx prisma migrate deploy
    npx prisma generate
    ```
5.  **Avvia il server:**
    ```bash
    npm start
    ```

### Passaggio 2: Configurazione del Frontend
Ora che il server è attivo, avviamo l'interfaccia grafica.

1.  Apri una nuova finestra del terminale e vai nella cartella:
    ```bash
    cd Frontend
    ```
2.  Installa i pacchetti necessari:
    ```bash
    npm install
    ```
3.  **Avvia l'applicazione:**
    ```bash
    ng serve --ssl
    ```
4.  Apri il tuo browser e visita l'indirizzo: `https://localhost:4200`

---

## Fonti e Documentazione
Per realizzare questo progetto abbiamo studiato le documentazioni ufficiali delle tecnologie utilizzate, seguendo le migliori pratiche di programmazione:

* **Angular (Interfaccia):** [https://angular.io/docs](https://angular.io/docs)
* **Express (Server):** [https://expressjs.com/](https://expressjs.com/)
* **Prisma (Gestione Dati):** [https://www.prisma.io/docs/](https://www.prisma.io/docs/)
* **PostgreSQL (Database):** [https://www.postgresql.org/docs/](https://www.postgresql.org/docs/)
* **Bootstrap (Design):** [https://getbootstrap.com/docs/](https://getbootstrap.com/docs/)
* **Normativa MIUR (Linee guida PDP):** Ci siamo basati sui modelli ministeriali ufficiali per garantire che i campi inseriti siano conformi alla legge italiana. [https://www.mim.gov.it/disturbi-specifici-dell-apprendimento-dsa-](https://www.mim.gov.it/disturbi-specifici-dell-apprendimento-dsa-)
