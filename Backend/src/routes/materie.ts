import { prisma } from "../server.ts";
import { CheckAdmin, CheckCoordinatore, CheckDocente } from "./ruoli.ts";

async function GetMaterie(req: any, res: any) {
    try {
        const filters: any = req["parsedQuery"].filters || {};

        if (!await CheckAdmin(req)) {
            if(filters.Materia_Documenti_Indicatori)
                return res.status(403).send("Accesso negato: questo tipo di filtro non è consentito se non sei un amministratore.");

            const classeId = filters?.Insegnamenti?.some?.Classe_Id;
            if (!classeId)
                return res.status(403).send("Accesso negato: devi specificare una classe di cui sei docente se non sei un amministratore.");

            const isDocente = await CheckDocente(req, classeId);
            const isCoordinatore = await CheckCoordinatore(req, classeId);

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

async function GetMaterieInsegnamenti(classeId: number, docenteEmail: string) {
    const insegnamenti = prisma.insegnamento.findMany({
        where: {
            Classe_Id: classeId,
            Docente_Email: docenteEmail
        },
        select: {
            Materia_Nome: true
        }
    });

    return (await insegnamenti).map(i => i.Materia_Nome);
}

export { GetMaterie, GetMaterieInsegnamenti };
