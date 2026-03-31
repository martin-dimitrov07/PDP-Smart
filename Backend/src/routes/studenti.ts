import { prisma } from "../server.ts";

async function GetSezioni(req: any, res: any) {
    try {
        const filters: any = req["parsedQuery"].filters || {};
        const distinct: any = req["parsedQuery"].distinct || "";

        let query: any = {
            where: filters,
            select: {
                Sezione: true
            }
        };

        if (distinct) {
            query.distinct = [distinct];
            query.orderBy = {
                [distinct]: "asc"
            };
        }

        const sezioni = await prisma.classe.findMany(query);

        if (sezioni && sezioni.length > 0)
            res.send(sezioni);
        else
            res.status(404).send("Sezioni non trovate");
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta delle sezioni: ", err);
    }
}

async function GetClassi(req: any, res: any) {
    try {
        const filters: any = req["parsedQuery"].filters || {};
        const distinct: any = req["parsedQuery"].distinct || "";

        let query: any = {
            where: filters
        };

        if (distinct)
            query.distinct = [distinct];

        const classi = await prisma.classe.findMany(query);

        if (classi && classi.length > 0)
            res.send(classi);
        else
            res.status(404).send("Classi non trovate");
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta delle classi: ", err);
    }
}

async function GetStudenti(req: any, res: any) {
    try {
        const filters: any = req["parsedQuery"].filters || {};

        const studenti = await prisma.studente.findMany({
            where: filters
        });

        if (studenti && studenti.length > 0)
            res.send(studenti);
        else
            res.status(404).send("Studenti non trovate");
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta delle studenti: ", err);
    }
}

async function GetStudenteById(req: any, res: any) {
    try {
        const studenteMail: any = req.params.id || "";

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

export { GetSezioni, GetClassi, GetStudenti, GetStudenteById };