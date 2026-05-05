import { writeFile, mkdir, unlink, readdir, readFile, access } from "fs/promises";
import { prisma } from "../server.ts";
import { extname, join } from "path";

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

        // UpdateAllegatiDocumento() {
        //     if (!this.documentoSelected) return;

        //     const formData: FormData = new FormData();

        //     formData.append('documento', JSON.stringify(this.documentoSelected));

        //     for (const file of this.allegatiEdit) {
        //         if (file.Value)
        //             formData.append('allegatiAdd', file.Allegato.File);
        //         else
        //             formData.append('allegatiDelete', JSON.stringify(file.Allegato));
        //     }

        //     return this.dataStorageService.InviaRichiesta("PATCH", "/documento/update-allegati", formData)!;
        // }
        const documento = JSON.parse(req.body.documento)
        const allegati = req.body.allegati;

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

async function GetAllegati(req: any, res: any) {
    try {
        const filters = req["parsedQuery"] || {};
        const Studente_Mail = filters.Studente_Mail;
        const Anno = filters.Anno ? new Date(filters.Anno).getFullYear().toString() : null;

        if (!Studente_Mail || !Anno) {
            return res.status(400).send({ error: "Mancano utente o anno nella richiesta" });
        }

        const cartellaTarget = join(`${process.env.ALLEGATI_PATH}`, Studente_Mail, Anno);

        try {
            await access(cartellaTarget);
        } catch {
            return res.status(200).send({ files: [] }); 
        }

        const nomiFiles = await readdir(cartellaTarget);

        const promisesFiles = nomiFiles.map(async (nomeFile) => {
            const percorsoCompleto = join(cartellaTarget, nomeFile);

            const fileBuffer = await readFile(percorsoCompleto);

            const estensione = extname(nomeFile).toLowerCase();
            let mimeType = 'application/octet-stream';

            if (estensione == '.pdf') mimeType = 'application/pdf';
            else if (estensione == '.jpg' || estensione == '.jpeg') mimeType = 'image/jpeg';
            else if (estensione == '.png') mimeType = 'image/png';
            else if (estensione == '.doc') mimeType = 'application/msword';
            else if (estensione == '.docx') mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

            return {
                Id: nomeFile.split("_")[0],
                Nome: nomeFile.split("_")[1],
                Tipo: mimeType,
                FileBase64: fileBuffer.toString('base64')
            };
        });

        const arrayFiles = await Promise.all(promisesFiles);

        res.status(200).send({ files: arrayFiles });

    } catch (err) {
        console.error("Errore nel recupero degli allegati:", err);
        res.status(500).send({ error: "Errore durante il recupero degli allegati" });
    }
}

export { CreateAllegati, SaveAllegato, DeleteAllegato, UpdateAllegatiDocumento, DeleteAllegati, GetAllegati };