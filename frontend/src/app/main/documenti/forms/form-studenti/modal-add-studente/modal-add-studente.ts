import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Classe } from '../../../../../models/classe';
import { Studente } from '../../../../../models/studente';
import { DocumentiService } from '../../../../../shared/services/documenti.service';
import { StudentiService } from '../../../../../shared/services/studenti.service';
import { CheckError } from '../../../../../shared/utilities/check-error';
import { Documento } from '../../../../../models/documento';


@Component({
    selector: 'app-modal-add-studente',
    imports: [FormsModule],
    templateUrl: './modal-add-studente.html',
    styleUrl: './modal-add-studente.css',
})
export class ModalAddStudente {
    allClasses: Classe[] = [];
    studenti: Studente[] = [];
    // classeId: number = 0;
    studenteEmail: string = '';
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    public readonly studentiService: StudentiService = inject(StudentiService);
    private readonly checkError: CheckError = inject(CheckError);

    @Output() studenteEvent = new EventEmitter<Studente>();

    ngOnInit() {
        // if (!this.studentiService.anniScolastici || this.studentiService.anniScolastici.length < 1)
        //     this.GetAnniScolastici();
        // else
            this.GetClassiNoDocEmpty();
    }

    // GetAnniScolastici() {
    //     this.studentiService.GetAnniScolastici().subscribe({
    //         next: (data: any) => {
    //             console.log(this.studentiService.anniScolastici);
    //             this.GetClassiNoDocEmpty();

    //         },
    //         error: (err: any) => this.checkError.checkError(err)
    //     });
    // }

    GetClassiNoDocEmpty() {
        this.studentiService.indirizzoSelected = "";
        this.studentiService.GetClassiNoDocEmpty({}, Documento.SetAnnoCorrect(new Date())).subscribe({
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

                this.documentiService.classeSelected = this.allClasses[0];

                this.GetStudentiNoDoc();
            },
            error: (err: any) => this.checkError.checkError(err)
        });
    }

    GetStudentiNoDoc() {
        console.log(JSON.stringify(this.documentiService.classeSelected));
        this.studentiService.GetStudentiNoDocumento(Number(this.documentiService.classeSelected.Id)).subscribe({
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
