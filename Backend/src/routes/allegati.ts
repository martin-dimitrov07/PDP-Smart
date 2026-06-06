import { writeFile, mkdir, unlink, readdir, readFile, access } from "fs/promises";
import { prisma } from "../server.ts";
import { extname, join } from "path";
import { GetClasseIdByDocumento } from "./classi.ts";
import { CheckAdmin, CheckCoordinatore, CheckDocente } from "./ruoli.ts";

async function CreateAllegati(db: any, allegati: any[], studenteEmail: string, anno: Date) {
    const allegatiCreati = [];
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

        allegatiCreati.push({
            record: newAllegato,
            data: allegato.data
        });
    }
    return allegatiCreati;
}

async function SaveAllegato(allegato: any, binaryData: any) {
    const filePath = `${allegato.Percorso}/${allegato.Id}_${allegato.Nome}`;
    await mkdir(allegato.Percorso, { recursive: true });
    await writeFile(filePath, binaryData);
}

async function DeleteAllegati(db: any, allegatiId: string[]) {
    const allegatiEliminati = [];
    for (const allegatoId of allegatiId) {
        const allegatoDeleted = await db.allegato.delete({
            where: {
                Id: parseInt(allegatoId)
            }
        });
        if (allegatoDeleted) {
            allegatiEliminati.push(allegatoDeleted);
        }
    }
    return allegatiEliminati;
}

async function DeleteAllegato(allegato: any) {
    const filePath = `${allegato.Percorso}/${allegato.Id}_${allegato.Nome}`;
    try {
        await unlink(filePath);
    } catch (err) {
        console.warn(`File non trovato o già eliminato: ${filePath}`);
    }
}

async function UpdateAllegatiDocumento(req: any, res: any) {
    try {
        const documento = JSON.parse(req.body.documento)
        const allegatiAdd = req.files && req.files.allegatiAdd ? (Array.isArray(req.files.allegatiAdd) ? req.files.allegatiAdd : [req.files.allegatiAdd]) : [];
        const allegatiDelete = req.body.allegatiDelete ? Array.isArray(req.body.allegatiDelete) ? req.body.allegatiDelete : [req.body.allegatiDelete] : [];

        if (!documento || !documento.Studente_Email || !documento.Anno) {
            return res.status(400).send("Mancano informazioni sul documento nella richiesta");
        }

        if (!await CheckAdmin(req)) {
            const classiIds = await GetClasseIdByDocumento(documento.Anno, documento.Studente_Email);

            if (!classiIds || classiIds.length == 0) {
                return res.status(404).send("Classe non trovata per lo studente e l'anno specificati nel documento.");
            }

            let isCoordinatore = false;
            for (const classeId of classiIds) {
                if (await CheckCoordinatore(req, classeId)) {
                    isCoordinatore = true;
                    break;
                }
            }

            if (!isCoordinatore) {
                return res.status(403).send("Accesso negato: non sei un amministratore o un coordinatore di una classe associata a questo documento.");
            }
        }

        let filesDelete: any[] = [];
        let saveAllegati: any[] = [];

        await prisma.$transaction(async (tx) => {
            if (allegatiAdd.length > 0) {
                saveAllegati = await CreateAllegati(tx, allegatiAdd, documento.Studente_Email, new Date(documento.Anno));
            }

            if (allegatiDelete.length > 0) {
                filesDelete = await DeleteAllegati(tx, allegatiDelete);
            }
        }, {
            maxWait: 5000,
            timeout: 10000
        });

        if (saveAllegati.length > 0) {
            const savePromises = saveAllegati.map(item =>
                SaveAllegato(item.record, item.data)
            );
            await Promise.all(savePromises);
        }

        if (filesDelete.length > 0) {
            const cleanupPromises = filesDelete.map(file => DeleteAllegato(file));
            await Promise.all(cleanupPromises);
        }

        res.status(200).send({ message: "Allegati aggiornati con successo" });
    }
    catch (err) {
        console.error("Errore nell'aggiornamento degli allegati del documento:", err);
        res.status(500).send("Errore durante l'aggiornamento degli allegati del documento");
    }
}

async function GetAllegati(req: any, res: any) {
    try {
        const filters = req["parsedQuery"].filters || {};
        const studente_Email = filters["Documento_Studente_Email"];
        const anno = filters["Documento_Anno"] ? new Date(filters["Documento_Anno"]).getFullYear().toString() : null;

        if (!studente_Email || !anno) {
            return res.status(400).send("Mancano utente o anno nella richiesta");
        }

        if (!await CheckAdmin(req)) {
            const classiIds = await GetClasseIdByDocumento(filters["Documento_Anno"], studente_Email);

            if (!classiIds || classiIds.length == 0) {
                return res.status(404).send("Classe non trovata per lo studente e l'anno specificati");
            }

            let hasAccess = false;
            for (const classeId of classiIds) {
                if (await CheckDocente(req, classeId)) {
                    hasAccess = true;
                    break;
                }
            }

            if (!hasAccess) {
                return res.status(403).send("Accesso negato: non sei un docente di una classe associata a questo documento.");
            }
        }

        const cartellaTarget = join(`${process.env.ALLEGATI_PATH}`, studente_Email, anno);

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
                Nome: nomeFile.split("_").map((parte, index) => index == 0 ? null : parte).join("_").replace("_", ""),
                Tipo: mimeType,
                FileBase64: fileBuffer.toString('base64')
            };
        });

        const arrayFiles = await Promise.all(promisesFiles);

        res.status(200).send(arrayFiles);

    } catch (err) {
        console.error("Errore nel recupero degli allegati:", err);
        res.status(500).send("Errore durante il recupero degli allegati");
    }
}

export { CreateAllegati, SaveAllegato, DeleteAllegato, UpdateAllegatiDocumento, DeleteAllegati, GetAllegati };