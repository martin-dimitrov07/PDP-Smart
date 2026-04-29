import { writeFile } from "fs/promises";
import { prisma } from "../server.ts";

async function CreatePDP(req: any, res: any) {
    try {
        const documento = req.body.data.Documento;
        const indicatori = req.body.data.Indicatori;
        const ICFs = req.body.data.ICFs;
        const allegati = Array.isArray(req.files.allegati) ? req.files.allegati : [req.files.allegati];


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
        });


        // const dataAnno = new Date(Anno);

        // // Inizio Transazione
        // const result = await prisma.$transaction(async (tx) => {

        //     // 4. Inserimento Allegati
        //     if (Allegati && Allegati.length > 0) {
        //         const allegatiData = Allegati.map(a => ({
        //             Nome: a.Nome,
        //             Percorso: a.Percorso,
        //             Documento_Studente_Email: Studente_Email,
        //             Documento_Anno: dataAnno
        //         }));

        //         await tx.allegato.createMany({
        //             data: allegatiData
        //         });
        //     }

        //     return nuovoDocumento;
        // });

        // res.status(201).json({
        //     message: "Documento e correlati creati con successo",
        //     data: result
        // });

    } catch (err: any) {
        console.error("Errore nella transazione:", err);
        res.status(500).json({
            error: "Errore durante la creazione del documento",
            details: err.message
        });
    }
}

async function CreateDocumento(db: any, documento: any) {
    documento.Anno = new Date();
    return await db.documento.create({
        data: documento
    });
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
            Percorso: `${process.env.ALLEGATI_PATH}/${studenteEmail}/${anno}`,
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
    const filePath = `${allegato.Percorso}/${allegato.Nome}_${allegato.Id}`;
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


export { CreatePDP, GetAnniScolasticiDocumenti, GetDocumenti };
