import { prisma } from "../server.ts";
import { CheckAdmin, CheckDocente } from "./ruoli.ts";

// STUDENTI

async function GetStudentiDocumento(req: any, res: any) {
    try {
        const filters: any = req["parsedQuery"].filters || {};
        const order: any = req["parsedQuery"].order || { Nome: 'asc' };

        const isAdmin = await CheckAdmin(req);
        const classeId = filters?.Classi_Studente?.some?.Classe_Id;

        if (!isAdmin) {
            if (!classeId) {
                return res.status(403).send("Accesso negato: devi specificare una classe se non sei amministratore.");
            }
            if (!await CheckDocente(req, classeId)) {
                return res.status(403).send("Accesso negato: non sei un docente di questa classe.");
            }
        }

        filters.Documento = {
            some: {}
        };

        const studenti = await prisma.studente.findMany({
            where: filters,
            orderBy: order
        });

        res.send(studenti);
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta delle studenti: ", err);
    }
}

async function GetStudenteByEmail(req: any, res: any) {
    try {
        const studenteMail = req.params.email || "";
        const AnnoScolastico = req["parsedQuery"]?.filters?.Anno_Scolastico;
        const isAdmin = await CheckAdmin(req);

        let studente;

        if (isAdmin) {
            studente = await prisma.studente.findUnique({
                where: { Email: studenteMail }
            });
        } else {
            if (!AnnoScolastico) {
                return res.status(400).send("Accesso negato: devi specificare un anno scolastico se non sei amministratore.");
            }
            studente = await prisma.studente.findFirst({
                where: {
                    Email: studenteMail,
                    Classi_Studente: {
                        some: {
                            Classe: {
                                Anno_Scolastico: new Date(AnnoScolastico),
                                Insegnamenti: {
                                    some: { Docente_Email: req.docente.Email }
                                }
                            }
                        }
                    }
                }
            });
        }

        if (!studente) {
            return res.status(404).send("Studente non trovato o non sei mai stato un suo docente.");
        }

        return res.send(studente);
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta dello studente: ", err);
    }
}

async function GetStudentiNoDoc(req: any, res: any) {
    try {
        const filters: any = req["parsedQuery"].filters || {};
        const order: any = req["parsedQuery"].order || { Nome: 'asc' };

        const isAdmin = await CheckAdmin(req);
        const classeId = filters?.Classi_Studente?.some?.Classe_Id;

        if (!isAdmin) {
            if (!classeId) {
                return res.status(403).send("Accesso negato: devi specificare una classe se non sei amministratore.");
            }
            if (!await CheckDocente(req, classeId)) {
                return res.status(403).send("Accesso negato: non sei un docente di questa classe.");
            }
        }

        filters.Documento = {
            none: {}
        };

        const studenti = await prisma.studente.findMany({
            where: filters,
            orderBy: order
        });

        res.send(studenti);
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta delle studenti: ", err);
    }
}

export { GetStudentiDocumento, GetStudenteByEmail, GetStudentiNoDoc };
