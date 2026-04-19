import { prisma } from "../server.ts";

async function GetMaterieDocente(req: any, res: any) {
    try {
        const filters: any = req["parsedQuery"].filters || {};

        const materie = await prisma.materia.findMany({
            where: filters,
            orderBy: { Nome: 'asc' }
        });

        if (materie && materie.length > 0)
            res.send(materie);
        else
            res.status(404).send("Materie non trovate");
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta delle materie: ", err);
    }
}

async function GetIndicatori(req: any, res: any) {
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

export { GetMaterieDocente, GetIndicatori };
