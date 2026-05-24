import { prisma } from "../server.ts";

async function GetClassi(req: any, res: any) {
    try {
        const filters: any = req["parsedQuery"].filters || {};

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

async function GetClasseById(req: any, res: any) {
    try {
        const classeId: number = parseInt(req.params.id) || 0;

        const classe = await prisma.classe.findUnique({
            where: { Id: classeId }
        });

        res.send(classe);
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta della classe: ", err);
    }
}

export { GetClassi, GetClasseById };
