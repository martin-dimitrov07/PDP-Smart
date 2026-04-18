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

        res.status(200).send(result);
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta della creazione documento/i: ", err);
    }
}

async function AddMaterieDocumento(req: any, res: any) {
    try {
        const materia: string = req.body.materia || '';
        const documento: any = req.body.documento || {};

        const result = await prisma.materia_Documento.create({
            data: {
                Materia_Nome: materia,
                Documento_Anno: documento.Anno,
                Documento_Studente_Email: documento.Email
            }
        });

        res.status(200).send(result);
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta della aggiunta materia al documento: ", err);
    }
}

export { CreateDocumento, AddMaterieDocumento };
