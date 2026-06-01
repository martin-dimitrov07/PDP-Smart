import { prisma } from "../server.ts";
import { CheckAdmin, CheckCoordinatore, CheckDocente } from "../routes/ruoli.ts";
import { GetClasseIdByDocumento } from "./classi.ts";
import { GetMaterieInsegnamenti } from "./materie.ts";

async function GetIndicatori(req: any, res: any) {
    try {
        const filters = req["parsedQuery"]?.filters || {};

        if(!await CheckAdmin(req) && filters.Materia_Documenti_Indicatori)
            return res.status(400).send("questo tipo di filtro non è consentito in questa richiesta se non sei un amministratore.");

        const indicatori = await prisma.indicatore.findMany({
            where: filters
        });

        res.send(indicatori);

    } catch (err) {
        console.error("Errore:", err);
        res.status(500).send("Errore nel recupero degli indicatori");
    }
}

async function GetIndicatoriByDocumento(req: any, res: any) {
    try {
        const filters = req["parsedQuery"]?.filters || {};

        if (!filters.Documento_Studente_Email || !filters.Documento_Anno) {
            res.status(400).send("Email dello studente e anno del documento sono richiesti");
            return;
        }

        const classeId = await GetClasseIdByDocumento(filters.Documento_Anno, filters.Documento_Studente_Email);
        
        if (!classeId) {
            return res.status(404).send("Classe non trovata per il documento specificato.");
        }

        if(!await CheckAdmin(req))
        {
            if (!await CheckDocente(req, classeId)) {
                return res.status(403).send("Accesso negato: non sei un docente della classe associata a questo documento.");
            }
        }

        // tutti i record che hanno quel studente_Email e documento_Anno
        // restituire id nota e materia e categoria
        // restituire un array
        const data = await prisma.materia_Documento_Indicatore.findMany({
            where: filters,
            select: {
                Materia_Nome: true,
                Indicatore_Id: true,
                Nota: true,
                Indicatore: {
                    select: {
                        Categoria: true
                    }
                }
            }
        });

        const indicatori = data.map(item => ({
            Materia: item.Materia_Nome,
            Id: item.Indicatore_Id,
            Nota: item.Nota,
            Categoria: item.Indicatore.Categoria
        }));

        res.send(indicatori);
    }
    catch (err) {
        console.error("Errore nel recupero degli indicatori del documento:", err);
        res.status(500).send("Errore durante il recupero degli indicatori del documento");
    }
}

async function UpdateIndicatoriDocumento(req: any, res: any) {
    try {
        const indicatori: any[] = req.body.indicatori;
        const documento: any = req.body.documento;

        const classeId = await GetClasseIdByDocumento(documento.Anno, documento.Studente_Email);

        if (!classeId) {
            return res.status(404).send("Classe non trovata per il documento specificato.");
        }

        if (!await CheckAdmin(req) && !await CheckCoordinatore(req, classeId)) {
            if (!await CheckDocente(req, classeId)) {
                return res.status(403).send("Accesso negato: non sei un docente della classe associata a questo documento.");
            }

            const materieDocente = await GetMaterieInsegnamenti(classeId, req.docente.Email);
            const materieIndicatori: string[] = [...new Set(indicatori.map((i: any) => i.Materia))];

            if (!materieIndicatori.every(m => materieDocente.includes(m))) {
                return res.status(403).send("Accesso negato: non sei il docente delle materie selezionate.");
            }
        }

        for (const indicatore of indicatori) {
            if (indicatore.Value == true) {
                // Creare o fare update del record
                await prisma.materia_Documento_Indicatore.upsert({
                    where: {
                        Materia_Nome_Indicatore_Id_Documento_Studente_Email_Documento_Anno: {
                            Materia_Nome: indicatore.Materia,
                            Indicatore_Id: indicatore.Id,
                            Documento_Anno: new Date(documento.Anno),
                            Documento_Studente_Email: documento.Studente_Email
                        }
                    },
                    update: {
                        Nota: indicatore.Nota || null
                    },
                    create: {
                        Materia_Nome: indicatore.Materia,
                        Indicatore_Id: indicatore.Id,
                        Documento_Anno: new Date(documento.Anno),
                        Documento_Studente_Email: documento.Studente_Email,
                        Nota: indicatore.Nota || null
                    }
                });
            } else if (indicatore.Value == false) {
                await prisma.materia_Documento_Indicatore.deleteMany({
                    where: {
                        Materia_Nome: indicatore.Materia,
                        Indicatore_Id: indicatore.Id,
                        Documento_Anno: new Date(documento.Anno),
                        Documento_Studente_Email: documento.Studente_Email
                    }
                });
            }
        }

        res.status(200).send({ message: "Indicatori aggiornati con successo" });
    } catch (err) {
        console.error("Errore nell'aggiornamento degli indicatori del documento:", err);
        res.status(500).send("Errore durante l'aggiornamento degli indicatori del documento");
    }
}

async function DeleteIndicatori(db: any, indicatori: any, studenteEmail: string, anno: Date) {
    for (const indicatore of indicatori) {
        await db.materia_Documento_Indicatore.delete({
            where: {
                Materia_Nome_Indicatore_Id_Documento_Studente_Email_Documento_Anno: {
                    Materia_Nome: indicatore.Materia,
                    Indicatore_Id: indicatore.Id,
                    Documento_Anno: anno,
                    Documento_Studente_Email: studenteEmail
                }
            }
        });
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

export { GetIndicatori, UpdateIndicatoriDocumento, DeleteIndicatori, CreateIndicatori, GetIndicatoriByDocumento };