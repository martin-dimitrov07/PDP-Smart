//A. import delle librerie
import https from "https";
import fs from "fs";
import express from "express";
import dotenv from "dotenv";
import queryStringParser from "./routes/queryStringParser.js";
import cors from "cors";
import cookieParser from "cookie-parser";

// routes
import GestioneLogin from "./routes/login.js"; 

import { PrismaClient } from "../prisma/generated/client/index.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

export const prisma = new PrismaClient({ adapter }); //export così da poterlo usare nelle API route (root dinamiche)

//B. configurazioni
//riconosce i tipi automaticamente (non è any) -> grazie @types/node in devDependencies (sviluppo)
const app = express();
//stessa cosa -> const app: express.Express = express();
dotenv.config({ path: ".env" });
const https_port = process.env.HTTPS_PORT;

//C. creazione ed avvio di un server https
const privateKey = fs.readFileSync("keys/privateKey.pem", "utf8");
const certificate = fs.readFileSync("keys/certificate.crt", "utf8");
const credentials = { "key": privateKey, "cert": certificate }; 

let httpsServer = https.createServer(credentials, app);
httpsServer.listen(https_port, function(){
 console.log("Server in ascolto sulla porta HTTPS:" + https_port)
});

//D. middleware
//middleware 1: request log
app.use(function(req, res, next) //se si omette => come risorsa "/"
{
    console.log("Ricevuta richiesta: " + req.method + ": " + req.originalUrl);
    next(); //passa al middleware successivo
});

//middleware 2: gestione delle risorse statiche
// app.use(express.static("./static"));

//middleware 3: gestione dei parametri post
app.use(express.json({"limit": "5mb"})); //i parametri post sono restituiti in req.body
//i parametri get invece sono restituiti come json in req.query

//middleware 4: parsing dei parametri GET
app.use("/", queryStringParser);

//middleware 5: log dei parametri
app.use((req: any, res, next) => {
    console.log("body", req.body);
    if(req.body && Object.keys(req.body).length > 0)
        console.log("   Parametri body: " + JSON.stringify(req.body));

    if (req["parsedQuery"] && Object.keys(req["parsedQuery"]).length > 0)
        console.log("   Parametri query: " + JSON.stringify(req["parsedQuery"]));

    next();
});

//middleware 6: Vincoli CORS (controlli lato server che consentono di accettare richieste anche da fuori dal dominio -> cioè diverso dal server da cui arrivano le pagine)
const corsOptions = {
    origin: function(origin: any, callback: any) {
        return callback(null, true);
    },
    credentials: true
};
app.use("/", cors(corsOptions));

//middleware 7: Parsing dei cookies (serve per usare req.cookies)
app.use(cookieParser());

//middleware 8: Gestione login e token
app.use((res, req, next) => { GestioneLogin(res, req); next(); });

//E. gestione delle root dinamiche

//F. default root e gestione errori
app.use(function(req, res){    
    if(req.originalUrl.startsWith("/api/"))
        res.status(404).send("Risorsa non trovata");
    else if(req.accepts("html")) // se la richiesta è per una pagina html
        res.status(404).send("<h1>Pagina non trovata</h1>");
    else
        res.sendStatus(404);
        // res.status(404).send(); equivalente
});

//G. gestione errori
app.use(function(err: Error, req: express.Request, res: express.Response, next: express.NextFunction){
    console.error("*** ERRORE ***:\n" + err.stack); //elenco completo degli errori
    res.status(500).send("Errore interno del server");
    next();
});