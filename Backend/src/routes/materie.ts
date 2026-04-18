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

export { GetMaterieDocente };
