export class Allegato {
    Id: number;
    File: File;

    constructor(
        Id: number = 0,
        File: File
    ) {
        this.Id = Id;
        this.File = File;
    }
}