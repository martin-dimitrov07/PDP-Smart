import { prisma } from "../server.ts";

async function GetIndicatori(req: any, res: any) {
    try {
        const filters = req["parsedQuery"]?.filters || {};

        const indicatori = await prisma.indicatore.findMany({
            where: filters
        });

        res.send(indicatori);

    } catch (err) {
        console.error("Errore:", err);
        res.status(500).send("Errore nel recupero degli indicatori");
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
                        await prisma.materia_Documento_Indicatore.delete({
                            where: {
                                Materia_Nome_Indicatore_Id_Documento_Studente_Email_Documento_Anno: {
                                    Materia_Nome: materia,
                                    Indicatore_Id: indicatore.Id,
                                    Documento_Anno: new Date(documento.Anno),
                                    Documento_Studente_Email: documento.Studente_Email
                                }
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

async function DeleteIndicatori(db: any, indicatori: any, studenteEmail: string, anno: Date) {
    for (const materia in indicatori) {
        for (const categoria in indicatori[materia]) {
            for (const indicatore of indicatori[materia][categoria]) {
                await db.materia_Documento_Indicatore.delete({
                    where: {
                        Materia_Nome_Indicatore_Id_Documento_Studente_Email_Documento_Anno: {
                            Materia_Nome: materia,
                            Indicatore_Id: indicatore.Id,
                            Documento_Anno: anno,
                            Documento_Studente_Email: studenteEmail
                        }
                    }
                });
            }
        }
    }
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

export { GetIndicatori as GetIndicatori, UpdateIndicatoriDocumento, DeleteIndicatori, CreateIndicatori };