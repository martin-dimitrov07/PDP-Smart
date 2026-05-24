import { prisma } from "../server.ts";
import { CheckAdmin, CheckDocente } from "./ruoli.ts";
import { GetClassi } from "./classi.ts";

async function GetCountStudentiDocumento(req: any, res: any) {
    try {
        const filters = req["parsedQuery"]?.filters || {};

        if (!await CheckDocente(req, filters.Classe_Id) && !await CheckAdmin(req))
            return res.status(403).send("Accesso negato: non sei un docente o un amministratore");

        filters.Studente = {
            Documento: {
                some: {}
            }
        }

        const countStudenti = await prisma.classe_Studente.count({
            where: filters
        });

        res.status(200).send({ countStudenti });

    } catch (err) {
        console.error("Errore:", err);
        res.status(500).send("Errore nel conteggio degli studenti per classe");
    }
}

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
        const isAdmin = await CheckAdmin(req);

        let studente;

        if (isAdmin) {
            studente = await prisma.studente.findUnique({
                where: { Email: studenteMail }
            });
        } else {
            studente = await prisma.studente.findFirst({
                where: {
                    Email: studenteMail,
                    Classi_Studente: {
                        some: {
                            Classe: {
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

export { GetStudentiDocumento, GetStudenteByEmail, GetStudentiNoDoc, GetCountStudentiDocumento };
