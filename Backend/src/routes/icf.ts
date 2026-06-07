import { prisma } from "../server.ts";
import { GetClassiIdByDocumento } from "./classi.ts";
import { CheckAdmin, CheckDocente } from "./ruoli.ts";

async function GetICFs(req: any, res: any) {
    try {
        const filters: any = req["parsedQuery"].filters || {};

        if (!await CheckAdmin(req)) {
            if (filters.Documenti_ICF) {
                if (!filters.Documenti_ICF.some.Documento_Studente_Email || !filters.Documenti_ICF.some.Documento_Anno) {
                    return res.status(403).send({ message: "Accesso negato: non sei un amministratore. Per visualizzare gli ICFs di un documento devi specificare sia l'email dello studente che l'anno del documento." });
                }

                const classiIds = await GetClassiIdByDocumento(filters.Documenti_ICF.some.Documento_Anno, filters.Documenti_ICF.some.Documento_Studente_Email);

                if (!classiIds || classiIds.length == 0) {
                    return res.status(404).send({ message: "Classe non trovata per il documento specificato." });
                }

                let hasAccess = false;
                for (const classeId of classiIds) {
                    if (await CheckDocente(req, classeId)) {
                        hasAccess = true;
                        break; 
                    }
                }

                if (!hasAccess) {
                    return res.status(403).send({ message: "Accesso negato: non sei un docente della classe associata a questo documento." });
                }
            }
        }

        const icf = await prisma.iCF.findMany({
            where: filters,
            orderBy: { Codice: 'asc' }
        });

        res.send(icf);
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send({ message: "Errore nella esecuzione della richiesta de ICF: ", err });
    }
}

async function DeleteICFs(db: any, ICFs: any, studenteEmail: string, anno: Date) {
    for (const icf of ICFs) {
        await db.documento_ICF.delete({
            where: {
                Id: {
                    ICF_Codice: icf.Codice,
                    Documento_Anno: anno,
                    Documento_Studente_Email: studenteEmail
                }
            }
        });
    }
}

async function CreateDocumentoICFs(db: any, ICFs: any, studenteEmail: string, anno: Date) {
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

async function CreateICFs(req: any, res: any) {
    try {
        const icfs: any[] = req.body.icfs;

        if (!await CheckAdmin(req)) {
            return res.status(403).send({ message: "Accesso negato: non sei un amministratore. Solo un amministratore può creare nuovi ICFs." });
        }

        for (const icf of icfs) {
            await prisma.iCF.create({
                data: {
                    Codice: icf.Codice,
                    Descrizione: icf.Descrizione
                }
            });
        }

        res.status(200).send({ message: "ICFs creati con successo" });
    } catch (err) {
        console.error("Errore nella creazione dell'ICF:", err);
        res.status(500).send({ message: "Errore durante la creazione dell'ICF" });
    }
}

async function UpdateICFsDocumento(req: any, res: any) {
    try {
        // ICF_Codice               String
        // Documento_Anno           DateTime
        // Documento_Studente_Email String
        // ICFs = {
        //     "ICF1": {
        //         "Codice": "ICF1"
        //         "Value": true/false è true se è da aggiungere senno se è false da eliminare
        //     },
        // }

        const ICFs = req.body.icfs;
        const documento = req.body.documento;

        if (!await CheckAdmin(req)) {
            return res.status(403).send({ message: "Accesso negato: non sei un amministratore. Solo un amministratore può aggiornare gli ICFs di un documento." });
        }

        for (const ICFKey in ICFs) {
            const ICF = ICFs[ICFKey];
            if (ICF.Value == true) {
                // Creare record se non esiste già, altrimenti non fare nulla
                await prisma.documento_ICF.upsert({
                    where: {
                        Id: {
                            ICF_Codice: ICF.Icf.Codice,
                            Documento_Anno: new Date(documento.Anno),
                            Documento_Studente_Email: documento.Studente_Email
                        }
                    },
                    update: {},
                    create: {
                        ICF_Codice: ICF.Icf.Codice,
                        Documento_Anno: new Date(documento.Anno),
                        Documento_Studente_Email: documento.Studente_Email
                    }
                });
            }
            else if (ICF.Value == false) {
                // Eliminare il record
                await prisma.documento_ICF.delete({
                    where: {
                        Id: {
                            ICF_Codice: ICF.Icf.Codice,
                            Documento_Anno: new Date(documento.Anno),
                            Documento_Studente_Email: documento.Studente_Email
                        }
                    }
                });
            }
        }

        res.status(200).send({ message: "ICFs aggiornati con successo" });
    }
    catch (err) {
        console.error("Errore nell'aggiornamento degli ICFs del documento:", err);
        res.status(500).send({ message: "Errore durante l'aggiornamento degli ICFs del documento" });
    }
}

export { GetICFs, DeleteICFs, CreateDocumentoICFs, UpdateICFsDocumento, CreateICFs };