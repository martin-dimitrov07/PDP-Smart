import { prisma } from "../server.ts";

// INDIRIZZI

async function GetIndirizzi(req: any, res: any) {
    try {
        const filters: any = req["parsedQuery"].filters || {};
        const distinct: any = req["parsedQuery"].distinct || "";

        let query: any = {
            where: filters,
            select: {
                Indirizzo: true
            }
        };

        if (distinct) {
            query.distinct = [distinct];
            query.orderBy = {
                [distinct]: "asc"
            };
        }

        const indirizzi = await prisma.classe.findMany(query);

        if (indirizzi && indirizzi.length > 0)
            res.send(indirizzi);
        else
            res.status(404).send("Indirizzi non trovati");
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta degli indirizzi: ", err);
    }
}

// CLASSI

async function GetClassi(req: any, res: any) {
    try {
        const filters: any = req["parsedQuery"].filters || {};
        const distinct: any = req["parsedQuery"].distinct || "";

        if (filters.Anno_Scolastico)
            filters.Anno_Scolastico = new Date(filters.Anno_Scolastico);

        const query: any = {
            where: filters,
            orderBy: [
                { Classe: 'asc' },
                { Sezione: 'asc' }
            ]
        }

        const classi = await prisma.classe.findMany(query);

        const groupsClassi: any = {
            "1": [],
            "2": [],
            "3": [],
            "4": [],
            "5": []
        };

        classi.forEach((c: any) => {
            const anno = c.Classe.toString();

            if (groupsClassi[anno]) {
                groupsClassi[anno].push(c);
            }
        });

        res.send(groupsClassi);
    } catch (err) {
        console.error("Errore:", err);
        res.status(500).send("Errore nel recupero delle classi");
    }
}

async function GetCountClassi(req: any, res: any) {
    try {
        const filters = req["parsedQuery"]?.filters || {};

        const countClassi = await prisma.classe.groupBy({
            by: ['Indirizzo'],
            where: filters,
            _count: {
                _all: true
            }
        });

        res.status(200).send({ countClassi });

    } catch (err) {
        console.error("Errore:", err);
        res.status(500).send("Errore nel conteggio delle classi");
    }
}

async function GetAnniScolastici(req: any, res: any) {
    try {
        const indirizzo: any = req["parsedQuery"]?.Indirizzo || "";

        const query: any = {
            distinct: ['Anno_Scolastico'],
            orderBy: {
                Anno_Scolastico: 'desc'
            },
            select: {
                Anno_Scolastico: true
            }
        };

        if(indirizzo)
        {
            query.where = {
                Indirizzo: indirizzo
            };
        }

        const classi = await prisma.classe.findMany(query);

        const anniVettore = classi.map(c => c.Anno_Scolastico);

        if (anniVettore.length > 0) {
            res.status(200).send(anniVettore);
        } else {
            res.status(404).send("Anni non trovati");
        }
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta degli anni: ", err);
    }
}

async function GetCountStudenti(req: any, res: any) {
    try {
        const filters = req["parsedQuery"]?.filters || {};

        const countStudenti = await prisma.classe_Studente.count({
            where: filters
        });

        res.status(200).send({ countStudenti });

    } catch (err) {
        console.error("Errore:", err);
        res.status(500).send("Errore nel conteggio degli studenti per classe");
    }
}

// STUDENTI

async function GetStudenti(req: any, res: any) {
    try {
        const filters: any = req["parsedQuery"].filters || {};

        const studenti = await prisma.studente.findMany({
            where: filters
        });

        if (studenti && studenti.length > 0)
            res.send(studenti);
        else
            res.status(404).send("Studenti non trovate");
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta delle studenti: ", err);
    }
}

async function GetStudenteById(req: any, res: any) {
    try {
        const studenteMail: any = req.params.id || "";

        const studente = await prisma.studente.findUnique({
            where: { Email: studenteMail }
        });

        if (studente)
            res.send(studente);
        else
            res.status(404).send("Studente non trovato");
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta dello studente: ", err);
    }
}

export { GetIndirizzi, GetClassi, GetStudenti, GetStudenteById, GetCountClassi, GetAnniScolastici, GetCountStudenti };
