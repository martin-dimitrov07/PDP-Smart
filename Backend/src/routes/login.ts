import { CookieOptions } from "express";
import { OAuth2Client } from 'google-auth-library';
import { prisma } from "../server.ts";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

// costanti globali
const cookiesOptions: CookieOptions = {
    "path": "/", // vale per tutte le sotto-route
    "httpOnly": true, // il cookie non è visibile da javascript
    "secure": true, // il cookie è solo trasmesso su canali HTTPS
    "maxAge": parseInt(process.env.DURATA_TOKEN!) * 1000, // durata relativa a partire da ora espressa in millisecondi
    "sameSite": "none" // deve essere messo anche extra-domain (lo manda anche ai server che non appartengono allo stesso dominio della pagina)
}
const clientGoogle: any = new OAuth2Client(process.env.CLIENT_ID);

// funzioni
async function GestioneLogin(req: any, res: any) {
    const token = req.body.token;

    try {
        const payload: any = await GetPayload(token);

        if (payload && payload.email) {
            const email = payload.email;

            const docente = await GetDocente(email);

            if (docente) {
                res.cookie("TOKEN", token, cookiesOptions);
                res.send(docente);
            } else {
                res.status(404).send({ message: "Utente non ammesso alla piattaforma" });
            }
        } else {
            res.status(403).send({ message: "Token non valido" });
        }
    } catch (error) {
        console.error("Errore Login:", error);
        res.status(403).send({ message: "Errore durante la verifica del token" });
    }
}

async function GetPayload(token: string) {
    const ticket = await clientGoogle.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID,
    });

    const payload = ticket.getPayload();
    return payload;
}

async function GetDocente(email: string) {
    return await prisma.docente.findUnique({
        where: {
            Email: email,
        },
    });
}

async function ControlloToken(req: any, res: any, next: any) {
    const token = req.cookies.TOKEN;

    // quando il cookie scade
    if (!token)
        return res.status(401).send({ message: "Token mancante" });

    try {
        const payload: any = await GetPayload(token);

        const docente = await GetDocente(payload.email);

        if (docente) {
            res.cookie("TOKEN", token, cookiesOptions);
            req.docente = docente;
            req.fotoUrl = payload.picture;
        } else {
            res.status(404).send({ message: "Docente loggato non trovato" });
        }

        next();
    }
    catch (err: any) {
        // entra in caso scade il token di google (dopo 1 ora)
        console.error('Errore validazione token:', err.message);
        res.status(401).send({ message: 'Token non valido o scaduto' });
    }
}

async function Logout(req: any, res: any, next: any) {
    const options = {
        // mi da tutte le chiavi dentro a cookieOptions
        ...cookiesOptions, maxAge: -1
    }
    // gli mandiamo un token vuoto con valore -1
    res.cookie("TOKEN", "", cookiesOptions);
    res.send({ "ok": 1 });
};

export { GestioneLogin, ControlloToken, Logout };