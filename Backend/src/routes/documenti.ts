import { writeFile, mkdir } from "fs/promises";
import { prisma } from "../server.ts";

async function UpdateAllegatiDocumento(req: any, res: any) {
    try {
        // allegati = [
        //     {Nome: "allegato1.pdf",  "Value": true/false},
        //     ...
        // ]
        const allegati = req.files && req.files.allegati ? (Array.isArray(req.files.allegati) ? req.files.allegati : [req.files.allegati]) : [];
        const documento = req.body.documento;

        for (const allegato of allegati) {
            if (allegato.Value == true) {
                // Creare record
                const newAllegato = await prisma.allegato.create({
                    data: {
                        Nome: allegato.name,
                        Percorso: `${process.env.ALLEGATI_PATH}/${documento.Studente_Email}/${(new Date(documento.Anno)).getFullYear().toString()}`,
                        Documento_Studente_Email: documento.Studente_Email,
                        Documento_Anno: new Date(documento.Anno)
                    }
                });
                await SaveAllegato(newAllegato, allegato.data);
            }
            else if (allegato.Value == false) {
                // Eliminare il record
                await prisma.allegato.deleteMany({
                    where: {
                        Nome: allegato.name,
                        Documento_Studente_Email: documento.Studente_Email,
                        Documento_Anno: new Date(documento.Anno)
                    }
                });
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

async function UpdateICFsDocumento(req: any, res: any) {
    try {
        //         ICF_Codice               String
        // Documento_Anno           DateTime
        // Documento_Studente_Email String
        // ICFs = {
        //     "ICF1": {
        //         "Codice": "ICF1"
        //         "value": true/false è true se è da aggiungere senno se è false da eliminare
        //     },
        // }

        const ICFs = req.body.ICFs;
        const documento = req.body.documento;

        for (const ICFKey in ICFs) {
            const ICF = ICFs[ICFKey];
            if (ICF.value == true) {
                // Creare record se non esiste già, altrimenti non fare nulla
                await prisma.documento_ICF.upsert({
                    where: {
                        Id: { 
                            ICF_Codice: ICF.Codice,
                            Documento_Anno: new Date(documento.Anno),
                            Documento_Studente_Email: documento.Studente_Email
                        }
                    },
                    update: {},
                    create: {
                        ICF_Codice: ICF.Codice,
                        Documento_Anno: new Date(documento.Anno),
                        Documento_Studente_Email: documento.Studente_Email
                    }
                });
            }
            else if (ICF.value == false) {
                // Eliminare il record
                await prisma.documento_ICF.deleteMany({
                    where: {
                        ICF_Codice: ICF.Codice,
                        Documento_Anno: new Date(documento.Anno),
                        Documento_Studente_Email: documento.Studente_Email
                    }
                });
            }
        }

        res.status(200).send({ message: "ICFs aggiornati con successo" });
    }
    catch (err) {
        console.error("Errore nell'aggiornamento degli ICFs del documento:", err);
        res.status(500).send({
            error: "Errore durante l'aggiornamento degli ICFs del documento",
            details: err
        });
    }
}

async function UpdateIndicatoriDocumento(req: any, res: any) {
    try {
        const indicatori = req.body.indicatori;
        const documento = req.body.documento;

        //     "matematica": 
        //         {
        //             "criteri": [ { id: "Id", Nota: "Nota", Value: true/false è true se è da aggiungere senno se è false da eliminare }, ... ],
        //             "categoria": []
        //         },

        // Aggiorna o crea i record in Materia_Documento_Indicatore
        // Fa la ricerca sull'indicatore e se non esiste uno con quel documento e indicatore, lo crea, altrimenti lo aggiorna
        for (const materia in indicatori) {
            for (const categoria in indicatori[materia]) {
                for (const indicatore of indicatori[materia][categoria]) {
                    if (indicatore.Value == true) {
                        // Creare o fare update del record
                        await prisma.materia_Documento_Indicatore.upsert({
                            where: {
                                Materia_Nome_Indicatore_Id_Documento_Studente_Email_Documento_Anno: {
                                    Materia_Nome: materia,
                                    Indicatore_Id: indicatore.Id,
                                    Documento_Anno: new Date(documento.Anno),
                                    Documento_Studente_Email: documento.Studente_Email
                                }
                            },
                            update: {
                                Nota: indicatore.Nota || null
                            },
                            create: {
                                Materia_Nome: materia,
                                Indicatore_Id: indicatore.Id,
                                Documento_Anno: new Date(documento.Anno),
                                Documento_Studente_Email: documento.Studente_Email,
                                Nota: indicatore.Nota || null
                            }
                        });
                    } else if (indicatore.Value === false) {
                        // Eliminare il record
                        await prisma.materia_Documento_Indicatore.deleteMany({
                            where: {
                                Materia_Nome: materia,
                                Indicatore_Id: indicatore.Id,
                                Documento_Anno: new Date(documento.Anno),
                                Documento_Studente_Email: documento.Studente_Email
                            }
                        });
                    }
                }
            }
        }

        res.status(200).send({ message: "Indicatori aggiornati con successo" });
    } catch (err) {
        console.error("Errore nell'aggiornamento degli indicatori del documento:", err);
        res.status(500).send({
            error: "Errore durante l'aggiornamento degli indicatori del documento",
            details: err
        });
    }
}

async function CreatePDP(req: any, res: any) {
    try {
        const documento = JSON.parse(req.body.data).Documento;
        const indicatori = JSON.parse(req.body.data).Indicatori;
        const ICFs = JSON.parse(req.body.data).ICFs;
        const allegati = req.files && req.files.allegati ? (Array.isArray(req.files.allegati) ? req.files.allegati : [req.files.allegati]) : [];

        // tx è un'istanza di PrismaClient che rappresenta la transazione in corso
        await prisma.$transaction(async (tx) => {
            const newDoc = await CreateDocumento(tx, documento);
            if (indicatori && Object.keys(indicatori).length > 0) {
                await CreateIndicatori(tx, indicatori, newDoc.Studente_Email, newDoc.Anno);
            }
            if (ICFs && ICFs.length > 0) {
                await CreateICFs(tx, ICFs, newDoc.Studente_Email, newDoc.Anno);
            }
            if (allegati && allegati.length > 0) {
                await CreateAllegati(tx, allegati, newDoc.Studente_Email, newDoc.Anno);
            }
        }, {
            maxWait: 5000, // tempo massimo di attesa per l'acquisizione di una connessione
            timeout: 10000 // imposta un timeout di 10 secondi per l'intera transazione
        });

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

async function CreateIndicatori(db: any, indicatori: any, studenteEmail: string, anno: Date) {
    for (const materia in indicatori) {
        for (const categoria in indicatori[materia]) {
            for (const indicatore of indicatori[materia][categoria]) {
                const record = {
                    Materia_Nome: materia,
                    Indicatore_Id: indicatore.Id,
                    Documento_Anno: anno,
                    Documento_Studente_Email: studenteEmail,
                    Nota: indicatore.Nota || null
                }
                await db.materia_Documento_Indicatore.create({
                    data: record
                });
            }
        }
    }
}

async function CreateICFs(db: any, ICFs: any, studenteEmail: string, anno: Date) {
    for (const icf of ICFs) {
        const record = {
            ICF_Codice: icf.Codice,
            Documento_Studente_Email: studenteEmail,
            Documento_Anno: anno
        };
        await db.documento_ICF.create({
            data: record
        });
    }
}

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


export { CreatePDP, GetAnniScolasticiDocumenti, GetDocumenti, UpdateIndicatoriDocumento, UpdateICFsDocumento, UpdateAllegatiDocumento };
