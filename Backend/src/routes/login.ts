import { CookieOptions } from "express";
import { OAuth2Client } from 'google-auth-library';
import { prisma } from "../server.ts";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const cookiesOptions: CookieOptions = {
    "path": "/", // vale per tutte le sotto-route
    "httpOnly": true, // il cookie non è visibile da javascript
    "secure": true, // il cookie è solo trasmesso su canali HTTPS
    "maxAge": parseInt(process.env.DURATA_TOKEN!) * 1000, // durata relativa a partire da ora espressa in millisecondi
    "sameSite": "none" // deve essere messo anche extra-domain (lo manda anche ai server che non appartengono allo stesso dominio della pagina)
}

async function GestioneLogin(req: any, res: any) {
    const token = req.body.token;
    const clientGoogle = new OAuth2Client(process.env.CLIENT_ID);
    
    try {
        const payload: any = await GetPayload(token, clientGoogle);

        if (payload && payload.email) {
            const email = payload.email;

            const docente = await GetDocente(email);

            if (docente) {
                res.cookie("TOKEN", token, cookiesOptions);
                res.send(docente);
            } else {
                res.status(404).send("Utente non ammesso alla piattaforma");
            }
        } else {
            res.status(403).send("Token non valido");
        }
    } catch (error) {
        console.error("Errore Login:", error);
        res.status(403).send("Errore durante la verifica del token");
    }
}

async function GetPayload(token: string, clientGoogle: any) {
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

export default GestioneLogin;