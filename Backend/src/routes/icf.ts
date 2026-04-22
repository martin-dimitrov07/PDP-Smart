import { prisma } from "../server.ts";

async function GetIcf(req: any, res: any) {
    try {
        const filters: any = req["parsedQuery"].filters || {};

        const icf = await prisma.iCF.findMany({
            where: filters,
            orderBy: { Codice: 'asc' }
        });

        res.send(icf);
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta de ICF: ", err);
    }
}

export { GetIcf };
