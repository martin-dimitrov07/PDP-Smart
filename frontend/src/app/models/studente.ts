export class Studente {
    Nome: string;
    Cognome: string;
    Email: string;
    DSA_BES: boolean;

    constructor(
        nome: string,
        cognome: string,
        email: string,
        DSA_BES: boolean
    ) {
        this.Nome = nome;
        this.Cognome = cognome;
        this.Email = email;
        this.DSA_BES = DSA_BES;
    }

    GetFullName(): string {
        return this.Cognome + " " + this.Nome;
    }

    GetInitials(): string {
        return this.Cognome.charAt(0) + this.Nome.charAt(0);
    }
}