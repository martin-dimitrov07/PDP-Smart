import { prisma } from "../server.ts";
import { CheckAdmin, CheckDocente } from "./ruoli.ts";
import { GetClassi } from "./classi.ts";

async function GetCountStudentiDocumento(req: any, res: any) {
    try {
        const filters = req["parsedQuery"]?.filters || {};

        if(!await CheckDocente(req, filters.Classe_Id) && !await CheckAdmin(req))
            return res.status(403).send("Accesso negato: non sei un docente o un amministratore");

        filters.Studente = {
            Documento: {
                some: {}
            }
        }

        const countStudenti = await prisma.classe_Studente.count({
            where: filters
        });

        res.status(200).send({ countStudenti });

    } catch (err) {
        console.error("Errore:", err);
        res.status(500).send("Errore nel conteggio degli studenti per classe");
    }
}

// STUDENTI

async function GetStudenti(req: any, res: any) {
    try {
        const filters: any = req["parsedQuery"].filters || {};
        const order: any = req["parsedQuery"].order || { Nome: 'asc' };

        if (!filters.Classi_Studente.some?.Classe_Id) {
            if (!await CheckAdmin(req))
                return res.status(403).send("Accesso negato: non sei un amministratore");
        }

        if (!await CheckDocente(req, filters.Classi_Studente.some?.Classe_Id))
            return res.status(403).send("Accesso negato: non sei un docente");

        filters.Documento = {
            some: {}
        };

        const studenti = await prisma.studente.findMany({
            where: filters,
            orderBy: order
        });

        res.send(studenti);
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta delle studenti: ", err);
    }
}

async function GetStudenteByEmail(req: any, res: any) {
    try {
        const studenteMail: any = req.params.email || "";
        const annoScolastico: any = req["parsedQuery"]?.filters?.Anno_Scolastico;

        req["parsedQuery"].filters = {
            Anno_Scolastico: annoScolastico,
            Insegnamemti: {
                some: {
                    Doente_Email: req.docente
                }
            },
            Classi_Studente: {
                some: {
                    Studente_Email: studenteMail
                }
            }
        }

        GetClassi(req, res); // per popolare req.classi

        for (const key in req.classi) {
            for (const classe of req.classi[key]) {
                if (!await CheckDocente(req, classe.Id) && !await CheckAdmin(req)) {
                    return res.status(403).send("Accesso negato: non sei un docente o un amministratore");
                }
            }
        }

        const studente = await prisma.studente.findUnique({
            where: { Email: studenteMail }
        });

        if (studente)
            res.send(studente);
        else
            res.status(404).send("Studente non trovato");
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta dello studente: ", err);
    }
}

async function GetStudentiNoDoc(req: any, res: any) {
    try {
        const filters: any = req["parsedQuery"].filters || {};
        const order: any = req["parsedQuery"].order || { Nome: 'asc' };

        if (!filters.Classi_Studente.some?.Classe_Id) {
            if (!await CheckAdmin(req))
                return res.status(403).send("Accesso negato: non sei un amministratore");
        }

        if (!await CheckDocente(req, filters.Classi_Studente.some?.Classe_Id))
            return res.status(403).send("Accesso negato: non sei un docente");

        filters.Documento = {
            none: {}
        };

        const studenti = await prisma.studente.findMany({
            where: filters,
            orderBy: order
        });

        res.send(studenti);
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta delle studenti: ", err);
    }
}

export { GetStudenti, GetStudenteByEmail, GetStudentiNoDoc, GetCountStudentiDocumento };
