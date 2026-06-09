export class Docente {
    Nome: string;
    Cognome: string;
    Email: string;
    Ruolo: Ruolo;
    // FotoUrl?: string;

    constructor(
        nome: string,
        cognome: string,
        email: string,
        Ruolo: Ruolo,
        fotoUrl?: string
    ) {
        this.Nome = nome;
        this.Cognome = cognome;
        this.Email = email;
        this.Ruolo = Ruolo;
        // this.FotoUrl = fotoUrl || "";
    }
}

export enum Ruolo{
    "ADMIN" = "ADMIN",
    "DOCENTE" = "DOCENTE",
    "COORDINATORE" = "COORDINATORE"
}