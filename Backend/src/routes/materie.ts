import { prisma } from "../server.ts";
import { CheckAdmin, CheckDocente } from "./ruoli.ts";

async function GetMaterie(req: any, res: any) {
    try {
        const filters: any = req["parsedQuery"].filters || {};

        if (!await CheckAdmin(req)) {
            if (!filters.Insegnamenti.Classe_Id)
                return res.status(403).send("Accesso negato: devi specificare una classe di cui sei docente se non sei un amministratore.");

            const isDocente = await CheckDocente(req, filters.Insegnamenti.Classe_Id);

            if(!isDocente)
                return res.status(403).send("Accesso negato: non sei un docente di questa classe.");
        }

        const materie = await prisma.materia.findMany({
            where: filters,
            orderBy: { Nome: 'asc' }
        });

        res.send(materie);
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta delle materie: ", err);
    }
}

export { GetMaterie };
