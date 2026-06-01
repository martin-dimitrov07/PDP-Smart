import { prisma } from "../server.ts";
import { CheckAdmin, CheckDocente } from "./ruoli.ts";

async function GetAnniScolasticiStudenti(req: any, res: any) {
    try {
        const filters = req["parsedQuery"].filters || {};

        const isAdmin = await CheckAdmin(req);

        if (!isAdmin) {
            if (filters.Classe_Id) {
                if (!(await CheckDocente(req, filters.Classe_Id))) {
                    return res.status(403).send("Accesso negato: non sei un docente di questa classe.");
                }
            }
            else if (filters.Insegnamenti?.some?.Docente_Email) {
                if (!req.docente || req.docente.Email != filters.Insegnamenti.some.Docente_Email) {
                    filters.Insegnamenti.some.Docente_Email = req.docente.Email;
                }
            }
            else {
                return res.status(403).send("Accesso negato: devi specificare una classe o una mail del docente se non sei amministratore.");
            }
        }

        const query: any = {
            distinct: ['Anno_Scolastico'],
            orderBy: {
                Anno_Scolastico: 'desc'
            },
            select: {
                Anno_Scolastico: true
            },
            where: {}
        };

        if (filters) {
            query.where = filters;
        }

        const classi = await prisma.classe.findMany(query);

        const anniVettore = classi.map(c => c.Anno_Scolastico);

        res.status(200).send(anniVettore);
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta degli anni: ", err);
    }
}

async function GetAnniScolasticiDocumenti(req: any, res: any) {
    try {
        const filters = req["parsedQuery"].filters || {};

        const isAdmin = await CheckAdmin(req);

        if (!isAdmin) {
            if (!filters.Docente_Email || !req.docente) {
                return res.status(403).send("Accesso negato: devi specificare la tua email per accedere a questa risorsa.");
            }

            if (req.docente.Email != filters.Docente_Email) {
                return res.status(403).send("Accesso negato: non sei il docente associato a questo documento.");
            }
        }

        const query: any = {
            distinct: ['Anno'],
            orderBy: {
                Anno: 'desc'
            },
            select: {
                Anno: true
            },
            where: {}
        };

        if (filters.Docente_Email) {
            query.where = {
                Studente: {
                    Classi_Studente: {
                        some: {
                            Classe: {
                                Insegnamenti: {
                                    some: {
                                        Docente_Email: filters.Docente_Email
                                    }
                                }
                            }
                        }
                    }
                }
            };
        }

        const documenti = await prisma.documento.findMany(query);
        const anniVettore = documenti.map(d => d.Anno);

        res.status(200).send(anniVettore);
    } catch (err) {
        console.error("Errore:", err);
        res.status(500).send("Errore nel recupero degli anni scolastici");
    }
}

export { GetAnniScolasticiStudenti, GetAnniScolasticiDocumenti };