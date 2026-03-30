export class Docente {
    Nome: string;
    Cognome: string;
    Email: string;

    constructor(
        nome: string,
        cognome: string,
        email: string,
    ) {
        this.Nome = nome;
        this.Cognome = cognome;
        this.Email = email;
    }
}
