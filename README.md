# PDP-Smart
### La piattaforma digitale per la gestione semplice ed efficace dei PDP degli studenti DSA e BES

....



Questo progetto utilizza un database relazionale in modo moderno ed efficace utilizzando Prisma e PostgreSQL.

## Prisma

Prisma è un ORM (Object Relational Mapping) che permette di interagire con il database attraverso il codice, evitando l’uso diretto di query SQL e rendendo lo sviluppo più chiaro, sicuro e manutenibile.

All’interno del progetto, la struttura del database non viene definita manualmente tramite SQL, ma attraverso uno schema Prisma, un file che descrive tabelle, campi e relazioni in modo semplice e leggibile. A partire da questo schema, Prisma si occupa di generare automaticamente le tabelle nel database PostgreSQL e di mantenerle aggiornate tramite il sistema di migrazioni.

L’utilizzo di Prisma consente di eseguire le principali operazioni CRUD (Create, Read, Update, Delete) in maniera intuitiva, riducendo la possibilità di errori e migliorando la comprensione del codice.

## Comandi utilizzati per l'inizializzazione della parte Backend

```
npm init -y
npm install express @prisma/client cors
npm install prisma typescript ts-node @types/node @types/express --save-dev
npx prisma init
```

## Modifiche al file .env

Esempio:
```
DATABASE_URL="postgresql://utente:password@localhost:5432/nomedb?schema=public"
```

### By Martino Lorenzo & Dimitrov Martin 