# PDP-Smart
### La piattaforma digitale per la gestione semplice ed efficace dei PDP degli studenti DSA e BES

....

Questo progetto utilizza un database relazionale in modo moderno ed efficace utilizzando Prisma e PostgreSQL.

## Prisma

Prisma è un ORM (Object Relational Mapping) che permette di interagire con il database attraverso il codice, evitando l’uso diretto di query SQL e rendendo lo sviluppo più chiaro, sicuro e manutenibile.

All’interno del progetto, la struttura del database non viene definita manualmente tramite SQL, ma attraverso uno schema Prisma, un file che descrive tabelle, campi e relazioni in modo semplice e leggibile. A partire da questo schema, Prisma si occupa di generare automaticamente le tabelle nel database PostgreSQL e di mantenerle aggiornate tramite il sistema di migrazioni.

L’utilizzo di Prisma consente di eseguire le principali operazioni CRUD (Create, Read, Update, Delete) in maniera intuitiva, riducendo la possibilità di errori e migliorando la comprensione del codice.

## Comandi per configurare il backend dopo il clone

### 1. Clonare il progetto
```
git clone https://github.com/martin-dimitrov07/PDP-Smart.git
```

### 2. Spostarsi nella cartella backend
```
cd PDP-Smart\Backend
```

### 3. Installare le dipendenze
```
npm install
```
oppure 
```
npm i
```

### 4. Configurare il database
Creare un file **.env** nella root del progetto e inserire:
```
DATABASE_URL="postgresql://utente:password@localhost:5432/nomedb?schema=public"
```
Verificare che:
- PostgreSQL sia attivo  
- Il database esista  
- Le credenziali siano corrette  

### 5. Applicare le migrazioni esistenti
```
npx prisma migrate deploy
```
### 6. Generare il Prisma Client
Serve a creare (o rigenerare) il Prisma Client, cioè la libreria che il codice utilizza per comunicare con il database.<br>
Non è garantito al 100% che il Prisma Client venga generato automaticamente in tutti gli ambienti; per questo motivo è consigliato rigenerarlo manualmente per evitare eventuali problemi.
```
npx prisma generate
```

## Modifiche al file .env

Esempio:
```
DATABASE_URL="postgresql://utente:password@localhost:5432/nomedb?schema=public"
```

### By Martino Lorenzo & Dimitrov Martin 