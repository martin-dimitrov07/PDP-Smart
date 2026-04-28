export class Documento {
    Studente_Email: string;
    Anno: Date;
    Stato: Stato;
    Tipologia: Tipo;
    Data_Approvazione?: Date;

    constructor(
        Studente_Email: string,
        Anno: Date,
        Tipologia: string,
        Data_Approvazione: Date | undefined = undefined
    ) {
        this.Studente_Email = Studente_Email;
        this.Anno = Documento.SetAnnoCorrect(Anno);
        this.Tipologia = Tipologia == 'DSA' ? Tipo.DSA : Tipo.BES;
        this.Data_Approvazione = Data_Approvazione;

        if (Data_Approvazione) {
            const scadenza = new Date(this.Anno.getTime());
            scadenza.setFullYear(scadenza.getFullYear() + 1);

            if (scadenza < new Date()) {
                this.Stato = Stato.SCADUTO;
            }
            else {
                this.Stato = Stato.VALIDATO;
            }
        }
        else
            this.Stato = Stato.IN_BOZZA;
    }

    static SetAnnoCorrect(data: Date): Date {
        let annoData = data.getFullYear();

        if (data.getMonth() < 8)
            annoData = annoData - 1;

        return new Date(Date.UTC(annoData, 8, 1))
    }
}

export enum Stato {
    "IN_BOZZA" = "IN_BOZZA",
    "VALIDATO" = "VALIDATO",
    "SCADUTO" = "SCADUTO"
}

export enum Tipo {
    "DSA" = "DSA",
    "BES" = "BES"
}