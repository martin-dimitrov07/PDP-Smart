import { prisma } from "../server.ts";

async function GetIndicatori(req: any, res: any) {
    try {
        const filters = req["parsedQuery"]?.filters || {};

        const indicatori = await prisma.indicatore.findMany({
            where: filters
        });

        res.send(indicatori);

    } catch (err) {
        console.error("Errore:", err);
        res.status(500).send("Errore nel recupero degli indicatori");
    }
}

export { GetIndicatori as GetIndicatori };
