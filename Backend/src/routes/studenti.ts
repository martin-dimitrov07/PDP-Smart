import { prisma } from "../server.ts";

async function GetCountStudenti(req: any, res: any) {
    try {
        const filters = req["parsedQuery"]?.filters || {};

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

export { GetStudenti, GetStudenteByEmail, GetStudentiNoDoc, GetCountStudenti };
