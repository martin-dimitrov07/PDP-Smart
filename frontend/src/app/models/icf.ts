export class Icf {
    Codice: string;
    Descrizione?: string;

    constructor(
        Codice: string,
        Descrizione?: string
    ) {
        this.Codice = Codice;
        this.Descrizione = Descrizione;
    }
}