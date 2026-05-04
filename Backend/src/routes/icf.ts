import { prisma } from "../server.ts";

async function GetIcf(req: any, res: any) {
    try {
        const filters: any = req["parsedQuery"].filters || {};

        const icf = await prisma.iCF.findMany({
            where: filters,
            orderBy: { Codice: 'asc' }
        });

        res.send(icf);
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta de ICF: ", err);
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

async function UpdateICFsDocumento(req: any, res: any) {
    try {
        //         ICF_Codice               String
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
        res.status(500).send({
            error: "Errore durante l'aggiornamento degli ICFs del documento",
            details: err
        });
    }
}

export { GetIcf, DeleteICFs, CreateICFs, UpdateICFsDocumento };