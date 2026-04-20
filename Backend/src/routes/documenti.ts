import { prisma } from "../server.ts";

async function CreateDocumento(req: any, res: any) {
    try {
        const documento: any = req.body || {};

        const result = await prisma.documento.create({
            data: {
                Studente_Email: documento.Studente_Email,
                Anno: new Date(documento.Anno),
                Stato: documento.Stato,
                Tipologia: documento.Tipologia,
                Data_Approvazione: documento.Data_Approvazione
                    ? new Date(documento.Data_Approvazione)
                    : null
            }
        });

        res.send(result);
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta della creazione documento/i: ", err);
    }
}

async function GetCountDocumenti(req: any, res: any) {
    try {
        const filters = req["parsedQuery"]?.filters || {};

        const countDocumenti = await prisma.documento.count({
            where: filters
        });

        res.send({ countDocumenti });

    } catch (err) {
        console.error("Errore:", err);
        res.status(500).send("Errore nel conteggio dei documenti");
    }
}

export { CreateDocumento, GetCountDocumenti };
