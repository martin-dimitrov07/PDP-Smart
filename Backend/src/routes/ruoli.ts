import { prisma } from "../server.ts";

async function CheckAdmin(req: any): Promise<boolean> {
    try {
        if (!req.docente.Email) {
            return false;
        }

        const docente = await prisma.docente.findUnique({
            where: {
                Email: req.docente.Email,
                Ruolo: "ADMIN"
            }
        });

        if (docente) {
            return true;
        }
        return false;
    }
    catch (err) {
        console.error("Errore esecuzione controllo ruolo admin:", err);
        return false;
    }
}

async function CheckCoordinatore(req: any, classeId: number): Promise<boolean> {
    try {
        if (!req.docente.Email) {
            return false;
        }

        const classe = await prisma.classe.findUnique({
            where: {
                Coordinatore_Email: req.docente.Email,
                Id: classeId
            }
        });

        if (classe) {
            return true;
        }
        return false;
    }
    catch (err) {
        console.error("Errore esecuzione controllo ruolo coordinatore:", err);
        return false;
    }
}

async function CheckDocente(req: any, classeId: number): Promise<boolean> {
    try {
        if (!req.docente.Email) {
            return false;
        }

        const insegnamentiDocente = await prisma.insegnamento.findMany({
            where: {
                Docente_Email: req.docente.Email,
                Classe_Id: classeId
            }
        });

        if (insegnamentiDocente.length > 0) {
            return true;
        }
        return false;
    }
    catch (err) {
        console.error("Errore esecuzione controllo ruolo docente:", err);
        return false;
    }
}

export { CheckAdmin, CheckCoordinatore, CheckDocente };