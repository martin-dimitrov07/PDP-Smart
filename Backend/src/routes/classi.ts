import { prisma } from "../server.ts";
import { CheckAdmin, CheckDocente, CheckCoordinatore } from "./ruoli.ts";

async function GetClassi(req: any, res: any) {
    try {
        const filters: any = req["parsedQuery"].filters || {};

        if (!await CheckAdmin(req)) {
            filters.Insegnamenti = {
                some: {
                    Docente_Email: req.docente.Email
                }
            };

            if(filters.Classi_Studente.some.Studente_Email && filters.Anno_Scolastico) {
                const classeId = await GetClasseIdByDocumento(filters.Anno_Scolastico, filters.Classi_Studente.some.Studente_Email);

                if (!classeId) {
                    return res.status(404).send("Classe non trovata per lo studente e l'anno scolastico specificati.");
                }

                if (!await CheckDocente(req, classeId)) {
                    return res.status(403).send("Accesso negato: non sei un docente di questa classe.");
                }
            }
        }

        if (filters.Anno_Scolastico)
            filters.Anno_Scolastico = new Date(filters.Anno_Scolastico);

        const query: any = {
            where: filters,
            orderBy: [
                { Classe: 'asc' },
                { Sezione: 'asc' }
            ]
        }

        const classi = await prisma.classe.findMany(query);

        const groupsClassi: any = {
            "1": [],
            "2": [],
            "3": [],
            "4": [],
            "5": []
        };

        if (await CheckAdmin(req)) {
            for (const c of classi) {
                const anno = c.Classe.toString();

                if (groupsClassi[anno]) {
                    groupsClassi[anno].push(c);
                }
            }
        }
        else {
            if (filters.Coordinatore_Email) {
                for (const c of classi) {
                    const anno = c.Classe.toString();

                    if (await CheckCoordinatore(req, c.Id) && groupsClassi[anno]) {
                        groupsClassi[anno].push(c);
                    }
                }
            }
            else {
                for (const c of classi) {
                    const anno = c.Classe.toString();

                    if (await CheckDocente(req, c.Id) && groupsClassi[anno]) {
                        groupsClassi[anno].push(c);
                    }
                }
            }
        }

        res.send(groupsClassi);
    } catch (err) {
        console.error("Errore:", err);
        res.status(500).send("Errore nel recupero delle classi");
    }
}

async function GetClasseById(req: any, res: any) {
    try {
        const classeId: number = parseInt(req.params.id) || 0;

        if (!await CheckAdmin(req)) {
            if (!await CheckDocente(req, classeId))
                return res.status(403).send("Accesso negato: non sei un docente di questa classe.");
            return res.status(403).send("Accesso negato: non sei un amministratore.");
        }

        const classe = await prisma.classe.findUnique({
            where: { Id: classeId }
        });

        res.send(classe);
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta della classe: ", err);
    }
}

async function GetClasseIdByDocumento(anno: string, studenteEmail: string) {
    const classe: any = await prisma.classe.findFirst({
        where: {
            Anno_Scolastico: new Date(anno),
            Classi_Studente: {
                some: {
                    Studente_Email: studenteEmail
                }
            }
        },
        select: {
            Id: true
        }
    });

    return classe?.Id;
}

export { GetClassi, GetClasseById, GetClasseIdByDocumento };
