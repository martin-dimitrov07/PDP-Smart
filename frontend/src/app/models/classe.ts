export class Classe {
    Id: Int32Array;
    Classe: Int32Array;
    Sezione: string;
    Indirizzo: string;
    Anno_Scolastico: number;

    constructor(
        id: Int32Array,
        classe: Int32Array,
        sezione: string,
        indirizzo: string,
        anno_Scolastico: Date
    ) {
        this.Id = id;
        this.Classe = classe;
        this.Sezione = sezione;
        this.Indirizzo = indirizzo;
        this.Anno_Scolastico = anno_Scolastico.getFullYear();
    }

    GetAnnoScolastico(){
        return this.Anno_Scolastico.toString() + "/" + (this.Anno_Scolastico + 1).toString();
    }
}