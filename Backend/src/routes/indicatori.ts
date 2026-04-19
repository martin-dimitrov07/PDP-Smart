import { prisma } from "../server.ts";

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

export { GetIndicatoriByMateria };
