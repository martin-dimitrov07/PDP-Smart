import { prisma } from "../server.ts";

async function IsCoordinatore(req: any, res: any) {
    try {
        const email = req["parsedQuery"].email;

        if (!email) {
            res.status(400).send("Email del docente è richiesta");
            return;
        }

        const classi = await prisma.classe.findMany({
            where: {
                Coordinatore_Email: email
            }
        });

        res.send({ isCoordinatore: classi.length > 0 });
    }
    catch (err) {
        console.error("Errore esecuzione richiesta");
        res.status(500).send("Errore nella esecuzione della richiesta: ", err);
    }
}
export { IsCoordinatore };