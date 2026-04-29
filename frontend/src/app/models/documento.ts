export enum Stato {
    IN_BOZZA = "IN_BOZZA",
    VALIDATO = "VALIDATO",
    SCADUTO = "SCADUTO"
}

export enum Tipo {
    DSA = "DSA",
    BES = "BES"
}

export class Documento {
    Studente_Email: string;
    Anno?: Date;
    Stato: Stato; // Obbligatorio inizializzarlo
    Tipologia: Tipo;
    Data_Approvazione?: Date;

    constructor(
        Studente_Email: string,
        Tipologia: Tipo, // Usiamo l'enum direttamente
        Anno?: Date,
        Data_Approvazione?: Date
    ) {
        this.Studente_Email = Studente_Email;
        this.Tipologia = Tipologia;
        this.Data_Approvazione = Data_Approvazione;

        if (Anno) {
            this.Anno = Documento.SetAnnoCorrect(Anno);
        }

        // Calcolo dello Stato
        this.Stato = this.calcolaStato(Data_Approvazione);
    }

    private calcolaStato(approvazione?: Date): Stato {
        if (!this.Anno || !approvazione) {
            return Stato.IN_BOZZA;
        }

        const scadenza = new Date(this.Anno.getTime());
        scadenza.setFullYear(scadenza.getFullYear() + 1);

        return scadenza < new Date() ? Stato.SCADUTO : Stato.VALIDATO;
    }

    static SetAnnoCorrect(data: Date): Date {
        let annoData = data.getFullYear();
        // Se siamo prima di Settembre (mese 8), l'anno accademico è il precedente
        if (data.getMonth() < 8) {
            annoData -= 1;
        }
        return new Date(Date.UTC(annoData, 8, 1));
    }
}