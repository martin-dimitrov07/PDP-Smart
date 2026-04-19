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

        res.status(200).send(result);
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

        res.status(200).send({ countDocumenti });

    } catch (err) {
        console.error("Errore:", err);
        res.status(500).send("Errore nel conteggio dei documenti");
    }
}

async function GetIndicatoriByMateria(req: any, res: any) {
    try {
        const materia = req.params.materia || "";

        const indicatori = await prisma.materia_Indicatore.findMany({
            where: { Materia_Nome: materia }
        });

        if (indicatori && indicatori.length > 0)
            res.send(indicatori);
        else
            res.status(404).send("Indicatori non trovati per la materia specificata");

    } catch (err) {
        console.error("Errore:", err);
        res.status(500).send("Errore nel recupero degli indicatori per materia");
    }
}

export { CreateDocumento, GetCountDocumenti, GetIndicatoriByMateria };
