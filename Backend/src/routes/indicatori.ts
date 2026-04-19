import { prisma } from "../server.ts";

async function GetIndicatori(req: any, res: any) {
    try {
        const filters = req["parsedQuery"]?.filters || {};

        const indicatori = await prisma.indicatore.findMany({
            where: filters
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

export { GetIndicatori as GetIndicatori };
