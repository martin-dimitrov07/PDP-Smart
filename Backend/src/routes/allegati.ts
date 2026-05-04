import { writeFile, mkdir, unlink } from "fs/promises";
import { prisma } from "../server.ts";

async function CreateAllegati(db: any, allegati: any, studenteEmail: string, anno: Date) {
    for (const allegato of allegati) {
        const record = {
            Nome: allegato.name,
            Percorso: `${process.env.ALLEGATI_PATH}/${studenteEmail}/${anno.getFullYear().toString()}`,
            Documento_Studente_Email: studenteEmail,
            Documento_Anno: anno
        };
        const newAllegato = await db.allegato.create({
            data: record
        });

        await SaveAllegato(newAllegato, allegato.data);
    }
}

async function SaveAllegato(allegato: any, binaryData: any) {
    const filePath = `${allegato.Percorso}/${allegato.Id}_${allegato.Nome}`;
    await mkdir(allegato.Percorso, { recursive: true });
    await writeFile(filePath, binaryData);
}

async function DeleteAllegati(db: any, allegati: any) {
    for (const allegato of allegati) {
        const allegatoDB = await db.allegato.findMany({
            where: {
                Documento_Studente_Email: allegato.documento.Studente_Email,
                Documento_Anno: new Date(allegato.documento.Anno),
                Nome: allegato.name
            }
        });
        const allegatoDeleted = await db.allegato.delete({
            where: {
                Id: allegatoDB.length > 0 ? allegatoDB[0]!.Id : -1
            }
        });
        await DeleteAllegato(allegatoDeleted);
    }
}

async function DeleteAllegato(allegato: any) {
    const filePath = `${allegato.Percorso}/${allegato.Id}_${allegato.Nome}`;
    await unlink(filePath);
}

async function UpdateAllegatiDocumento(req: any, res: any) {
    try {
        // allegati = [
        //     {Nome: "allegato1.pdf",  "Value": true/false},
        //     ...
        // ]
        const allegati = req.files && req.files.allegati ? (Array.isArray(req.files.allegati) ? req.files.allegati : [req.files.allegati]) : [];
        const documento = req.body.documento;

        for (const allegato of allegati) {

            const allegatoDB = await prisma.allegato.findMany({
                where: {
                    Documento_Studente_Email: documento.Studente_Email,
                    Documento_Anno: new Date(documento.Anno),
                    Nome: allegato.name
                }
            });

            if (allegato.Value == true) {
                // Creare record se non esiste già, altrimenti non fare nulla
                const newAllegato = await prisma.allegato.upsert({
                    where: {
                        Id: allegatoDB.length > 0 ? allegatoDB[0]!.Id : -1 // se esiste già prendo l'id del primo record trovato, altrimenti metto un id che sicuramente non esiste
                    },
                    update: {},
                    create: {
                        Nome: allegato.name,
                        Percorso: `${process.env.ALLEGATI_PATH}/${documento.Studente_Email}/${new Date(documento.Anno).getFullYear().toString()}`,
                        Documento_Studente_Email: documento.Studente_Email,
                        Documento_Anno: new Date(documento.Anno)
                    }
                });
                await SaveAllegato(newAllegato, allegato.data);
            }
            else if (allegato.Value == false) {
                // Eliminare il record
                const allegatoDeleted = await prisma.allegato.delete({
                    where: {
                        Id: allegatoDB.length > 0 ? allegatoDB[0]!.Id : -1
                    }
                });
                // Eliminare il file dal filesystem
                await DeleteAllegato(allegatoDeleted);
            }
        }

        res.status(200).send({ message: "Allegati aggiornati con successo" });
    }
    catch (err) {
        console.error("Errore nell'aggiornamento degli allegati del documento:", err);
        res.status(500).send({
            error: "Errore durante l'aggiornamento degli allegati del documento",
            details: err
        });
    }
}

export { CreateAllegati, SaveAllegato, DeleteAllegato, UpdateAllegatiDocumento, DeleteAllegati };