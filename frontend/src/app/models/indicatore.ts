export class Indicatore {
    Id: number;
    Tipologia: Tipologia;
    Categoria: Categoria;
    Descrizione: string;

    constructor(
        Id: number,
        Tipologia: Tipologia,
        Categoria: Categoria,
        Descrizione: string
    ) {
        this.Id = Id;
        this.Tipologia = Tipologia;
        this.Categoria = Categoria;
        this.Descrizione = Descrizione;
    }
}

export enum Tipologia {
    "DSA" = "DSA",
    "BES" = "BES",
    "ENTRAMBI" = "ENTRAMBI"
}

export enum Categoria {
    STRUMENTI_COMPENSATIVI = 'STRUMENTI_COMPENSATIVI',
    MISURE_DISPENSATIVE = 'MISURE_DISPENSATIVE',
    MODALITA_VERIFICA = 'MODALITA_VERIFICA',
    CRITERI_VALUTAZIONE = 'CRITERI_VALUTAZIONE'
}