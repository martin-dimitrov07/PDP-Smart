import { prisma } from "../server.ts";

async function GetIndirizzi(req: any, res: any) {
    try {
        const filters: any = req["parsedQuery"].filters || {};
        const distinct: any = req["parsedQuery"].distinct || "";

        let query: any = {
            where: filters,
            select: {
                Indirizzo: true
            }
        };

        if (distinct) {
            query.distinct = [distinct];
            query.orderBy = {
                [distinct]: "asc"
            };
        }

        const indirizzi = await prisma.classe.findMany(query);

        res.send(indirizzi);
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta degli indirizzi: ", err);
    }
}

export { GetIndirizzi };