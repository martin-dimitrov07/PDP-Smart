import { prisma } from "../server.ts";
import { CheckAdmin } from "./ruoli.ts";

async function GetIndirizzi(req: any, res: any) {
    try {
        const filters: any = req["parsedQuery"].filters || {};
        const distinct: any = req["parsedQuery"].distinct || "";

        if(!filters.Insegnamenti.some?.Docente_Email) {
            if(!await CheckAdmin(req))
                return res.status(403).send("Accesso negato: solo admin possono filtrare per docente");
            else if(filters.Insegnamenti.some?.Docente_Email != req.docente) 
                return res.status(403).send("Accesso negato: autenticazione docente non corrisponde al filtro richiesto");
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