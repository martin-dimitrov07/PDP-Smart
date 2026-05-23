import { prisma } from "../server.ts";
import * as GestioneIndicatori from "./indicatori.ts";
import * as GestioneICF from "./icf.ts";
import * as GestioneAllegati from "./allegati.ts";
import { writeFile, mkdir, readFile, access } from "fs/promises";
import { join } from 'path';
import { promisify } from 'util';
import libre from 'libreoffice-convert';

async function DeletePDP(req: any, res: any) {
    try {
        const documento = JSON.parse(req["parsedQuery"].Documento);
        const indicatori = JSON.parse(req["parsedQuery"].Indicatori);
        const ICFs = JSON.parse(req["parsedQuery"].ICFs);
        const allegati = JSON.parse(req["parsedQuery"].AllegatiIds);

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

        let saveAllegati: any[] = [];

        // tx è un'istanza di PrismaClient che rappresenta la transazione in corso
        await prisma.$transaction(async (tx) => {
            const newDoc = await CreateDocumento(tx, documento);
            if (indicatori && Object.keys(indicatori).length > 0) {
                await GestioneIndicatori.CreateIndicatori(tx, indicatori, newDoc.Studente_Email, newDoc.Anno);
            }
            if (ICFs && ICFs.length > 0) {
                await GestioneICF.CreateICFs(tx, ICFs, newDoc.Studente_Email, newDoc.Anno);
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

async function GetAnniScolasticiDocumenti(req: any, res: any) {
    try {
        const docenteEmail = req["parsedQuery"]["docenteEmail"] || null;

        const query: any = {
            distinct: ['Anno'],
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
        const filters = req["parsedQuery"].filters || {};
        const docenteEmail = req["parsedQuery"].docenteEmail;

        if (docenteEmail) {
            filters.Studente = {
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
        const Data_Aprprovazione = new Date();
        const filters = req.body.filters || {};

        const updated = await prisma.documento.updateMany({
            where: filters,
            data: {
                Data_Approvazione: Data_Aprprovazione
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

const convertToPdf = promisify(libre.convert);

async function SalvaDocumentoApprovato(req: any, res: any) {
    try {
        const documento = req.files.documento;
        const anno = req.body.anno;
        const studente_email = req.body.studente_email;

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
        const anno = req["parsedQuery"].Anno;
        const studente_email = req["parsedQuery"].Studente_Email;

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
        
export { CreatePDP, GetAnniScolasticiDocumenti, GetDocumenti, DeletePDP, ApprovaDocumento, SalvaDocumentoApprovato, GetDocumentoApprovato };