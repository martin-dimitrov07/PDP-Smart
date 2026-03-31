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
}

// enum DSA_BES {
//     DSA = "DSA",
//     BES = "BES"
// }