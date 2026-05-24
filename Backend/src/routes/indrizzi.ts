import { prisma } from "../server.ts";
import { CheckAdmin } from "./ruoli.ts";

async function GetIndirizzi(req: any, res: any) {
    try {
        const filters: any = req["parsedQuery"].filters || {};
        const distinct: any = req["parsedQuery"].distinct || "";

        const isAdmin = await CheckAdmin(req);

        if (!isAdmin) {
            const requestedEmail = filters?.Insegnamenti?.some?.Docente_Email;

            if (requestedEmail && requestedEmail != req.docente.Email) {
                return res.status(403).send("Accesso negato: non puoi filtrare per un altro docente.");
            }

            if (!requestedEmail) {
                filters.Insegnamenti = {
                    some: { Docente_Email: req.docente.Email }
                };
            }
        }

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