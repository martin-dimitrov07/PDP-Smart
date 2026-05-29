import { prisma } from "../server.ts";
import * as GestioneIndicatori from "./indicatori.ts";
import * as GestioneICF from "./icf.ts";
import * as GestioneAllegati from "./allegati.ts";
import { writeFile, mkdir, readFile, access } from "fs/promises";
import { join } from 'path';
import libre from 'libreoffice-convert';
import { CheckAdmin, CheckCoordinatore, CheckDocente } from "./ruoli.ts";
import { GetClasseIdByDocumento } from "./classi.ts";

async function DeletePDP(req: any, res: any) {
    try {
        const documento = req["parsedQuery"].Documento;
        const indicatori = req["parsedQuery"].Indicatori;
        const ICFs = req["parsedQuery"].ICFs;
        const allegati = req["parsedQuery"].AllegatiIds;

        if (documento.Data_Approvazione) {
            return res.status(400).send("Non è possibile eliminare un documento approvato o scaduto.");
        }

        if (!documento || !documento.Studente_Email || !documento.Anno) {
            return res.status(400).send("Mancano informazioni sul documento nella richiesta");
        }

        const classeId = await GetClasseIdByDocumento(documento.Anno, documento.Studente_Email);

        if (!classeId) {
            return res.status(404).send("Classe non trovata per lo studente e l'anno specificati nel documento.");
        }

        if (!await CheckAdmin(req)) {
            if (!await CheckCoordinatore(req, classeId)) {
                return res.status(403).send("Accesso negato: non sei un amministratore o un coordinatore della classe associata a questo documento.");
            }
        }

        let allegatiDelete: any[] = [];

        await prisma.$transaction(async (tx) => {
            if (ICFs && ICFs.length > 0) {
                await GestioneICF.DeleteICFs(tx, ICFs, documento.Studente_Email, new Date(documento.Anno));
            }
            if (indicatori && Object.keys(indicatori).length > 0) {
                await GestioneIndicatori.DeleteIndicatori(tx, indicatori, documento.Studente_Email, new Date(documento.Anno));
            }
            if (allegati && allegati.length > 0) {
                allegatiDelete = await GestioneAllegati.DeleteAllegati(tx, allegati);
            }
            await DeleteDocumento(tx, documento);
        }, {
            maxWait: 5000, // tempo massimo di attesa per l'acquisizione di una connessione
            timeout: 10000 // imposta un timeout di 10 secondi per l'intera transazione
        });

        if (allegatiDelete.length > 0) {
            const deletePromises = allegatiDelete.map(allegato =>
                GestioneAllegati.DeleteAllegato(allegato)
            );

            await Promise.all(deletePromises);
        }

        res.status(200).send({ message: "Documento eliminato con successo" });
    }
    catch (err) {
        console.error("Errore nella cancellazione del documento:", err);
        res.status(500).send({
            error: "Errore durante la cancellazione del documento",
            details: err
        });
    }
}

async function DeleteDocumento(db: any, documento: any) {
    await db.documento.delete({
        where: {
            Id: {
                Studente_Email: documento.Studente_Email,
                Anno: new Date(documento.Anno)
            }
        }
    });
}

async function CreatePDP(req: any, res: any) {
    try {
        const documento = JSON.parse(req.body.data).Documento;
        const indicatori = JSON.parse(req.body.data).Indicatori;
        const ICFs = JSON.parse(req.body.data).ICFs;
        const allegati = req.files && req.files.allegati ? (Array.isArray(req.files.allegati) ? req.files.allegati : [req.files.allegati]) : [];

        if (!documento || !documento.Studente_Email || !documento.Anno || !indicatori || !ICFs || !allegati) {
            return res.status(400).send("Mancano informazioni sul documento nella richiesta");
        }

        if (!await CheckAdmin(req)) {
            const classeId = await GetClasseIdByDocumento(documento.Anno, documento.Studente_Email);

            if (!classeId) {
                return res.status(404).send("Classe non trovata per lo studente e l'anno specificati nel documento.");
            }

            if (!await CheckCoordinatore(req, classeId)) {
                return res.status(403).send("Accesso negato: non sei un amministratore o un coordinatore della classe associata a questo documento.");
            }
        }

        let saveAllegati: any[] = [];

        // tx è un'istanza di PrismaClient che rappresenta la transazione in corso
        await prisma.$transaction(async (tx) => {
            const newDoc = await CreateDocumento(tx, documento);
            if (indicatori && Object.keys(indicatori).length > 0) {
                await GestioneIndicatori.CreateIndicatori(tx, indicatori, newDoc.Studente_Email, newDoc.Anno);
            }
            if (ICFs && ICFs.length > 0) {
                await GestioneICF.CreateDocumentoICFs(tx, ICFs, newDoc.Studente_Email, newDoc.Anno);
            }
            if (allegati && allegati.length > 0) {
                saveAllegati = await GestioneAllegati.CreateAllegati(tx, allegati, newDoc.Studente_Email, newDoc.Anno);
            }
        }, {
            maxWait: 5000, // tempo massimo di attesa per l'acquisizione di una connessione
            timeout: 10000 // imposta un timeout di 10 secondi per l'intera transazione
        });

        if (saveAllegati.length > 0) {
            const savePromises = saveAllegati.map(item =>
                GestioneAllegati.SaveAllegato(item.record, item.data)
            );
            await Promise.all(savePromises);
        }

        res.status(200).send({ message: "Documento creato con successo" });

    } catch (err: any) {
        console.error("Errore nella transazione:", err);
        res.status(500).send({
            error: "Errore durante la creazione del documento",
            details: err
        });
    }
}

async function CreateDocumento(db: any, documento: any) {
    documento.Anno = SetAnnoCorrect(new Date());
    return await db.documento.create({
        data: documento
    });
}

function SetAnnoCorrect(data: Date): Date {
    let annoData = data.getFullYear();
    // Se siamo prima di Settembre (mese 8), l'anno accademico è il precedente
    if (data.getMonth() < 8) {
        annoData -= 1;
    }
    return new Date(Date.UTC(annoData, 8, 1));
}

async function GetDocumenti(req: any, res: any) {
    try {
        const filters = req["parsedQuery"].filters || {};

        if (!await CheckAdmin(req)) {
            if (filters.Materia_Documenti_Indicatori || filters.Documento_ICFs || filters.Allegati || filters.Studente) {
                return res.status(400).send("Non è possibile filtrare i documenti con questi filtri se non si è un amministratore.");
            }

            filters.Studente = {
                Classi_Studente: {
                    some: {
                        Classe: {
                            Insegnamenti: {
                                some: {
                                    Docente_Email: req.docente.Email
                                }
                            }
                        }
                    }
                }
            };
        }

        const documenti = await prisma.documento.findMany({
            where: filters,
            orderBy: {
                Studente_Email: "asc",
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

async function ApprovaDocumento(req: any, res: any) {
    try {
        const Data_Approvazione = new Date();
        const filters = req.body.filters || {};

        if (!filters.Studente_Email || !filters.Anno) {
            return res.status(400).send("Mancano informazioni per identificare il documento da approvare.");
        }

        const classeId = await GetClasseIdByDocumento(filters.Anno, filters.Studente_Email);

        if (!classeId) {
            return res.status(404).send("Classe non trovata per lo studente e l'anno specificati nel documento.");
        }

        if (!await CheckAdmin(req)) {
            if (!await CheckCoordinatore(req, classeId)) {
                return res.status(403).send("Accesso negato: non sei un amministratore o un coordinatore della classe associata a questo documento.");
            }
        }

        const updated = await prisma.documento.updateMany({
            where: filters,
            data: {
                Data_Approvazione: Data_Approvazione
            }
        });

        if (updated.count > 0) {
            res.status(200).send({ message: "Documento approvato con successo" });
        } else {
            res.status(404).send({ message: "Nessun documento trovato con i criteri specificati" });
        }
    } catch (err) {
        console.error("Errore:", err);
        res.status(500).send({ message: "Errore nell'approvazione del documento" });
    }
}

const convertToPdf = (buffer: Buffer, format: string, filter: undefined): Promise<Buffer> => {
    return new Promise((resolve, reject) => {
        libre.convert(buffer, format, filter, (err, done) => {
            if (err) return reject(err);
            resolve(done);
        });
    });
};

async function SalvaDocumentoApprovato(req: any, res: any) {
    try {
        const documento = req.files.documento;
        const anno = req.body.anno.split('T')[0];
        const studente_email = req.body.studente_email;

        if(!documento.Data_Approvazione) {
            return res.status(400).send("Il documento non è stato approvato. Non è possibile salvarlo.");
        }

        if (!anno || !studente_email) {
            return res.status(400).send("Mancano informazioni per identificare il documento da approvare.");
        }

        const classeId = await GetClasseIdByDocumento(anno, studente_email);

        if (!classeId) {
            return res.status(404).send("Classe non trovata per lo studente e l'anno specificati nel documento.");
        }

        if (!await CheckAdmin(req)) {
            if (!await CheckCoordinatore(req, classeId)) {
                return res.status(403).send("Accesso negato: non sei un amministratore o un coordinatore della classe associata a questo documento.");
            }
        }

        if (!req.files || !req.files.documento) {
            return res.status(400).send({ message: "Nessun documento caricato." });
        }

        const directoryPath = `documenti/${studente_email}/${anno}`;
        const pdfPath = join(directoryPath, 'PDP_approvato.pdf');

        await mkdir(directoryPath, { recursive: true });

        const docxBuffer = documento.data;
        const pdfBuffer = await convertToPdf(docxBuffer, '.pdf', undefined); // undefined per usare le impostazioni predefinite di LibreOffice

        await writeFile(pdfPath, pdfBuffer);

        res.status(200).send({ message: "Documento salvato con successo" });

    } catch (err) {
        console.error("Errore:", err);
        res.status(500).send({ message: "Errore nel salvataggio del documento approvato" });
    }
}

async function GetDocumentoApprovato(req: any, res: any) {
    try {
        const anno = req["parsedQuery"].Anno.split('T')[0];
        const studente_email = req["parsedQuery"].Studente_Email;

        if (!anno || !studente_email) {
            return res.status(400).send("Mancano informazioni per identificare il documento da recuperare.");
        }

        const classeId = await GetClasseIdByDocumento(anno, studente_email);

        if (!classeId) {
            return res.status(404).send("Classe non trovata per lo studente e l'anno specificati nel documento.");
        }

        if (!await CheckAdmin(req)) {
            if (!await CheckDocente(req, classeId)) {
                return res.status(403).send("Accesso negato: non sei un amministratore o un docente della classe associata a questo documento.");
            }
        }

        if (!anno || !studente_email) {
            return res.status(400).send({ message: "Email o anno mancanti." });
        }

        const pdfPath = join(`documenti/${studente_email}/${anno}`, 'PDP_approvato.pdf');

        try {
            await access(pdfPath);
        } catch {
            return res.status(404).send({ message: "Documento approvato non trovato." });
        }

        const pdfBuffer = await readFile(pdfPath);
        res.setHeader('Content-Type', 'application/pdf');
        res.send(pdfBuffer);

    } catch (err) {
        console.error("Errore:", err);
        res.status(500).send({ message: "Errore nel recupero del documento approvato" });
    }
}

export { CreatePDP, GetDocumenti, DeletePDP, ApprovaDocumento, SalvaDocumentoApprovato, GetDocumentoApprovato };