export class Docente {
    Nome: string;
    Cognome: string;
    Email: string;
    Ruolo: Ruolo;

    constructor(
        nome: string,
        cognome: string,
        email: string,
        Ruolo: Ruolo
    ) {
        this.Nome = nome;
        this.Cognome = cognome;
        this.Email = email;
        this.Ruolo = Ruolo;
    }
}

export enum Ruolo{
    "ADMIN" = "ADMIN",
    "DOCENTE" = "DOCENTE"
}