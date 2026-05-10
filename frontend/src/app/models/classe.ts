import { Documento } from "./documento";

export class Classe {
    Id: number;
    Classe: number;
    Sezione: string;
    Indirizzo: string;
    Anno_Scolastico: Date;
    nStudenti?: number;

    constructor(
        id: number,
        classe: number,
        sezione: string,
        indirizzo: string,
        anno_Scolastico: Date | string  //Prisma potrebbe mandare date anche come stringa
    ) {
        this.Id = id;
        this.Classe = classe;
        this.Sezione = sezione;
        this.Indirizzo = indirizzo;

        const date = typeof anno_Scolastico == 'string'
            ? new Date(anno_Scolastico)
            : anno_Scolastico;

        this.Anno_Scolastico = Documento.SetAnnoCorrect(new Date(date));
    }

    GetSigla(): string {
        return this.Classe.toString() + this.Sezione.toString();
    }

    GetFullNome(): string {
        return this.Classe.toString() + this.Sezione.toString() + " " + this.Indirizzo.toString();
    }
}