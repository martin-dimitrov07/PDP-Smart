import { Component, inject, Input, Output } from '@angular/core';
import { Studente } from '../../../../../../models/studente';
import { Classe } from '../../../../../../models/classe';
import { EventEmitter } from '@angular/core';
import { CheckError } from '../../../../../../shared/utilities/check-error';
import { StudentiService } from '../../../../../../shared/services/studenti.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-modal-add-studente',
    imports: [FormsModule],
    templateUrl: './modal-add-studente.html',
    styleUrl: './modal-add-studente.css',
})
export class ModalAddStudente {
    allClasses: Classe[] = [];
    studenti: Studente[] = [];
    classeId: number = 0;
    studenteEmail: string = '';
    public readonly studentiService: StudentiService = inject(StudentiService);
    private readonly checkError: CheckError = inject(CheckError);

    @Output() studenteEvent = new EventEmitter<Studente>();

    ngOnInit() {
        if (!this.studentiService.anniScolastici || this.studentiService.anniScolastici.length < 1)
            this.GetAnniScolastici();
        else
            this.GetClassiNoEmpty();
    }

    GetAnniScolastici() {
        this.studentiService.GetAnniScolastici().subscribe({
            next: (data: any) => {
                console.log(this.studentiService.anniScolastici);
                this.GetClassiNoEmpty();

            },
            error: (err: any) => this.checkError.checkError(err)
        });
    }

    GetClassiNoEmpty() {
        this.studentiService.indirizzoSelected = "";
        this.studentiService.GetClassiNoEmpty({}, this.studentiService.anniScolastici[0]).subscribe({
            next: (data: any) => {
                console.log(data);
                for (const key in data) {
                    for (const classe of data[key]) {
                        this.allClasses.push(
                            new Classe(classe.Id, classe.Classe, classe.Sezione, classe.Indirizzo, new Date(classe.Anno_Scolastico))
                        );
                    }
                }

                console.log(data);
                console.log(this.allClasses);

                this.classeId = this.allClasses[0].Id;

                this.GetStudenti();
            },
            error: (err: any) => this.checkError.checkError(err)
        });
    }

    GetStudenti() {
        this.studentiService.GetStudentiNoDocumento(Number(this.classeId)).subscribe({
            next: (data: any) => {
                this.studentiService.studentiNoDoc = data.map((studente: Studente) => new Studente(studente.Nome, studente.Cognome, studente.Email, studente.DSA_BES));
                this.studenteEmail = data[0].Email;
            },
            error: (err: any) => this.checkError.checkError(err)
        });
    }

    SaveStudente() {
        this.studentiService.GetStudenteByEmail(this.studenteEmail).subscribe({
            next: async (studente: Studente) => {
                // if(this.studentiSelected.findIndex(s => s.Email == studente.Email) == -1) {
                //     this.studentiSelected.push(new Studente(
                //         studente.Nome,
                //         studente.Cognome,
                //         studente.Email,
                //         studente.DSA_BES
                //     ));
                // }
                this.studenteEvent.emit(new Studente(
                    studente.Nome,
                    studente.Cognome,
                    studente.Email,
                    studente.DSA_BES
                ));
            },
            error: (err: any) => this.checkError.checkError(err)
        });
    }
}
