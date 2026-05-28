import { prisma } from "../server.ts";
import { CheckAdmin, CheckDocente } from "./ruoli.ts";

async function IsCoordinatore(req: any, res: any) {
    try {
        const email = req["parsedQuery"].email;

        if (!email) {
            res.status(400).send("Email del docente è richiesta");
            return;
        }

        if (!await CheckAdmin(req)) {
            if (req.docente && req.docente.Email != email)
                return res.status(403).send("Accesso negato: non puoi verificare se un altro docente è coordinatore");
        }

        const classi = await prisma.classe.findMany({
            where: {
                Coordinatore_Email: email
            }
        });

        res.send({ isCoordinatore: classi.length > 0 });
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta: ", err);
    }
}

async function GetDocentiByClasse(req: any, res: any) {
    try {
        const id_classe = req["parsedQuery"].id_classe;

        if (!id_classe) {
            res.status(400).send("ID della classe è richiesto");
            return;
        }

        const isAdmin = await CheckAdmin(req);

        if (!isAdmin) {
            if (!await CheckDocente(req, id_classe))
                return res.status(403).send("Accesso negato: non sei docente di questa classe");
        }

        const docenti = await prisma.docente.findMany({
            where: {
                Insegnamenti: {
                    some: {
                        Classe_Id: id_classe
                    }
                }
            }
        });

        res.send(docenti);
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta: ", err);
    }
}

export { IsCoordinatore, GetDocentiByClasse };