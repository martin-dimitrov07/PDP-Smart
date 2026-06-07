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

            if (filters.Classi_Studente?.some?.Studente_Email && filters.Anno_Scolastico) {
                const classiIds = await GetClassiIdByDocumento(filters.Anno_Scolastico, filters.Classi_Studente.some.Studente_Email);

                if (!classiIds || classiIds.length === 0) {
                    return res.status(404).send({ message: "Classe non trovata per lo studente e l'anno scolastico specificati." });
                }

                let hasAccess = false;
                for (const classeId of classiIds) {
                    if (await CheckDocente(req, classeId)) {
                        hasAccess = true;
                        break;
                    }
                }

                if (!hasAccess) {
                    return res.status(403).send({ message: "Accesso negato: non sei un docente di questa classe." });
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
        res.status(500).send({ message: "Errore nel recupero delle classi" });
    }
}

async function GetClasseById(req: any, res: any) {
    try {
        const classeId: number = parseInt(req.params.id) || 0;

        if (!await CheckAdmin(req)) {
            if (!await CheckDocente(req, classeId))
                return res.status(403).send({ message: "Accesso negato: non sei un docente di questa classe." });
        }

        const classe = await prisma.classe.findUnique({
            where: { Id: classeId }
        });

        res.send(classe);
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send({ message: "Errore nella esecuzione della richiesta della classe: ", error: err });
    }
}

async function GetClassiIdByDocumento(anno: string | Date, studenteEmail: string | any): Promise<number[]> {
    if (typeof studenteEmail != 'string') {
        const keys = Object.keys(studenteEmail);

        if (keys.length != 2 || !(keys.includes('contains') && keys.includes('mode'))) {
            return [];
        }
    }

    const classi = await prisma.classe.findMany({
        where: {
            Anno_Scolastico: typeof anno == 'string' ? new Date(anno) : anno,
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

    return classi.map(c => c.Id);
}

export { GetClassi, GetClasseById, GetClassiIdByDocumento };
