import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Classe } from '../../../../../models/classe';
import { Studente } from '../../../../../models/studente';
import { DocumentiService } from '../../../../../shared/services/documenti.service';
import { StudentiService } from '../../../../../shared/services/studenti.service';
import { CheckError } from '../../../../../shared/utilities/check-error';
import { Documento } from '../../../../../models/documento';
import { IndirizziService } from '../../../../../shared/services/indirizzi.service';
import { ClassiService } from '../../../../../shared/services/classi.service';


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
    isLoadingClasses: boolean = false;
    isLoadingStudents: boolean = false;

    public readonly documentiService: DocumentiService = inject(DocumentiService);
    public readonly indirizziService: IndirizziService = inject(IndirizziService);
    public readonly classiService: ClassiService = inject(ClassiService);
    public readonly studentiService: StudentiService = inject(StudentiService);
    private readonly checkError: CheckError = inject(CheckError);

    @Output() studenteEvent = new EventEmitter<Studente>();

    ngOnInit() {
        this.GetClassiNoDocEmpty();
    }

    GetClassiNoDocEmpty() {
        this.isLoadingClasses = true;
        this.indirizziService.indirizzoSelected = "";
        this.classiService.GetClassiNoDocEmpty({}, Documento.SetAnnoCorrect(new Date())).subscribe({
            next: (data: any) => {
                console.log(data);
                for (const key in data) {
                    for (const classe of data[key]) {
                        this.allClasses.push(
                            new Classe(classe.Id, classe.Classe, classe.Sezione, classe.Indirizzo, classe.Coordinatore_Email, new Date(classe.Anno_Scolastico))
                        );
                    }
                }

                console.log(data);
                console.log(this.allClasses);

                this.classiService.classeSelected = this.allClasses[0];

                this.GetStudentiNoDoc();
                this.isLoadingClasses = false;
            },
            error: (err: any) => {
                this.checkError.checkError(err);
                this.isLoadingClasses = false;
            }
        });
    }

    GetStudentiNoDoc() {
        this.isLoadingStudents = true;
        console.log(JSON.stringify(this.classiService.classeSelected));
        this.studentiService.GetStudentiNoDocumento(Number(this.classiService.classeSelected.Id)).subscribe({
            next: (data: any) => {
                this.studentiService.studentiNoDoc = data.map((studente: Studente) => new Studente(studente.Nome, studente.Cognome, studente.Email, studente.DSA_BES));
                this.studenteEmail = data[0].Email;
                this.isLoadingStudents = false;
            },
            error: (err: any) => {
                this.checkError.checkError(err);
                this.isLoadingStudents = false;
            }
        });
    }

    SaveStudente() {
        this.studentiService.GetStudenteByEmail(this.studenteEmail, this.classiService.classeSelected.Anno_Scolastico).subscribe({
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