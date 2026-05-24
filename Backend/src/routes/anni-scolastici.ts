import { prisma } from "../server.ts";

async function GetAnniScolasticiStudenti(req: any, res: any) {
    try {
        const filters = req["parsedQuery"] || "";

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
        const docenteEmail = req["parsedQuery"]["docenteEmail"] || null;

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

        if (docenteEmail) {
            query.where = {
                Studente: {
                    Classi_Studente: {
                        some: {
                            Classe: {
                                Insegnamenti: {
                                    some: {
                                        Docente_Email: docenteEmail
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