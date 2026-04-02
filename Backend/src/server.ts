//A. import delle librerie
import https from "https";
import fs from "fs";
import express from "express";
import dotenv from "dotenv";
import queryStringParser from "./routes/queryStringParser.ts";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

// routes
import * as Login from "./routes/login.ts";
import * as GestioneStudenti from "./routes/studenti.ts";

import { PrismaClient } from "../prisma/generated/client/index.js";
import { PrismaPg } from "@prisma/adapter-pg";

//B. configurazioni
//riconosce i tipi automaticamente (non è any) -> grazie @types/node in devDependencies (sviluppo)
const app = express();
//stessa cosa -> const app: express.Express = express();
dotenv.config({ path: ".env" });
const https_port = process.env.HTTPS_PORT;

// sicurezza con http headers di sicurezza
app.use(helmet());

// configurazioni PrismaClient
const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
    // Aggiungi questo per dire al driver di accettare il tuo certificato self-signed
    // ssl: { rejectUnauthorized: false }
});

export const prisma = new PrismaClient({
//   log: [
//     {
//       emit: 'stdout',
//       level: 'query',
//     },
//     {
//       emit: 'stdout',
//       level: 'error',
//     },
//     {
//       emit: 'stdout',
//       level: 'info',
//     },
//     {
//       emit: 'stdout',
//       level: 'warn',
//     },
//   ], 
  adapter
}); //export così da poterlo usare nelle API route (root dinamiche)

//C. creazione ed avvio di un server https
const privateKey = fs.readFileSync("keys/privateKey.pem", "utf8");
const certificate = fs.readFileSync("keys/certificate.crt", "utf8");
const credentials = { "key": privateKey, "cert": certificate };

let httpsServer = https.createServer(credentials, app);
httpsServer.listen(https_port, function () {
    console.log("Server in ascolto sulla porta HTTPS:" + https_port)
});

//D. middleware
//middleware 1: request log
app.use(function (req, res, next) //se si omette => come risorsa "/"
{
    console.log("Ricevuta richiesta: " + req.method + ": " + req.originalUrl);
    next(); //passa al middleware successivo
});

//middleware 2: gestione delle risorse statiche
// app.use(express.static("./static"));

//middleware 3: gestione dei parametri post
app.use(express.json({ "limit": "5mb" })); //i parametri post sono restituiti in req.body
//i parametri get invece sono restituiti come json in req.query

//middleware 4: parsing dei parametri GET
app.use("/", queryStringParser);

//middleware 5: log dei parametri
app.use((req: any, res, next) => {
    if (req.body && Object.keys(req.body).length > 0)
        console.log("   Parametri body: " + JSON.stringify(req.body));

    if (req["parsedQuery"] && Object.keys(req["parsedQuery"]).length > 0)
        console.log("   Parametri query: " + JSON.stringify(req["parsedQuery"]));

    next();
});

//middleware 6: Vincoli CORS (controlli lato server che consentono di accettare richieste anche da fuori dal dominio -> cioè diverso dal server da cui arrivano le pagine)
const corsOptions = {
    origin: function (origin: any, callback: any) {
        return callback(null, true);
    },
    credentials: true
};
app.use("/", cors(corsOptions));

//middleware 7: Parsing dei cookies (serve per usare req.cookies)
app.use(cookieParser());

// Gestione Login
// Gestione delle troppe richieste
const LoginLimiter = rateLimit({
    windowMs: 60 * 1000, // Finestra di 1 minuto
    max: 7, // Massimo 7 tentativi al minuto per IP
    message: "Troppi tentativi di login. Riprova tra 1 minuto.",
    legacyHeaders: false,
});
//Login
app.post("/api/login", LoginLimiter, Login.GestioneLogin);

//middleware 8: Controllo token
app.use("/api/", Login.ControlloToken);

//E. gestione delle root dinamiche

//Email docente
app.get("/api/email-docente", (req: any, res: any) => {
    if(req.docente)
        res.send(req.docente);
    else
        res.status(500).send("Errore nell'invio della mail del docente");
})

//Studenti
app.get("/api/indirizzi", GestioneStudenti.GetIndirizzi);
app.get("/api/classi", GestioneStudenti.GetClassi);
app.get("/api/studenti", GestioneStudenti.GetStudenti);
app.get("/api/studente/:id", GestioneStudenti.GetStudenteById);

//F. default root e gestione errori
app.use(function (req, res) {
    if (req.originalUrl.startsWith("/api/"))
        res.status(404).send("Risorsa non trovata");
    else if (req.accepts("html")) // se la richiesta è per una pagina html
        res.status(404).send("<h1>Pagina non trovata</h1>");
    else
        res.sendStatus(404);
    // res.status(404).send(); equivalente
});

//G. gestione errori
app.use(function (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) {
    console.error("*** ERRORE ***:\n" + err.stack); //elenco completo degli errori
    res.status(500).send("Errore interno del server");
    next();
});


//H. Gestione della chiusura pulita
const ChiusuraPrisma = async () => {
  try {
    await prisma.$disconnect();
    console.log("Chiusura della connessione con il database avvenuta correttamente");
    process.exit(0); // 0 -> chiusura corretta
  } catch (err) {
    console.error("Errore durante la chiusura di Prisma:", err);
    process.exit(1); // 1 -> chiusura con errori
  }
};

// Intercetta il segnale di chiusura (CTRL+C)
process.on("SIGINT", ChiusuraPrisma);
// Intercetta il segnale di terminazione (es. da Heroku o Docker)
process.on("SIGTERM", ChiusuraPrisma);