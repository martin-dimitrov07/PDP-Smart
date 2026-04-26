import { prisma } from "../server.ts";

async function CreateDocumento(req: any, res: any) {
    try {
        const documento: any = req.body || {};

        const result = await prisma.documento.create({
            data: {
                Studente_Email: documento.Studente_Email,
                Anno: new Date(documento.Anno),
                Stato: documento.Stato,
                Tipologia: documento.Tipologia,
                Data_Approvazione: documento.Data_Approvazione
                    ? new Date(documento.Data_Approvazione)
                    : null
            }
        });

        res.send(result);
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta della creazione documento/i: ", err);
    }
}

async function GetAnniScolasticiDocumenti(req: any, res: any) {
    try {
        const docenteEmail = req["parsedQuery"]["docenteEmail"] || null;

        const query: any = {
            distinct: ['Anno'], // Prende anni univoci
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

async function GetDocumenti(req: any, res: any) {
    try {
        const filters: any = req["parsedQuery"].filters || {};

        const documenti = await prisma.documento.findMany({
            where: filters,
            orderBy: {
                Studente_Email : "asc",
            }
        });

        res.send(documenti);
    }
    catch (err) {
        console.error("Errore esecuzione richiesta documenti:", err);
        res.status(500).send({
            error: "Errore nella esecuzione della richiesta dei documenti",
            details: err
        });
    }
}

export { CreateDocumento, GetAnniScolasticiDocumenti, GetDocumenti };
