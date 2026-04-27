import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { DocumentiService } from '../../../../../shared/services/documenti.service';
import { Router } from '@angular/router';
import { CheckError } from '../../../../../shared/utilities/check-error';
import { FormsModule } from '@angular/forms';
import { CategoriaInd } from './categoria-ind/categoria-ind';
import { CommonModule, } from "@angular/common";
import { StepsService } from '../../../../../shared/services/steps.service';
import { ModalAddNota } from './modal-add-nota/modal-add-nota';

@Component({
    selector: 'app-form-indicatori',
    imports: [FormsModule, CategoriaInd, CommonModule, ModalAddNota],
    templateUrl: './form-indicatori.html',
    styleUrl: './form-indicatori.css',
})
export class FormIndicatori {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    public readonly stepsService: StepsService = inject(StepsService);
    private readonly checkError: CheckError = inject(CheckError);

    datiCaricati: boolean = false;

    eventoNota: any;

    private readonly cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

    ngOnInit() {
        this.stepsService.step = "indicatori";

        this.documentiService.GetMaterieClasse().subscribe({
            next: (data) => {
                this.documentiService.GetCategorieIndicatore().subscribe({
                    next: (data) => {
                        this.datiCaricati = false;
                        // Forziamo Angular a capire che c'è stato un cambiamento
                        this.cdr.detectChanges();

                        // console.log(this.documentiService.indicatori.object);

                        if(Object.keys(this.documentiService.indicatori).length == 0)
                        {
                            this.InitializeIndicatori();
                        }

                        this.datiCaricati = true;
                        this.cdr.detectChanges();
                    },
                    error: (err) => this.checkError.checkError(err)
                });
            },
            error: (err) => this.checkError.checkError(err)
        })
    }

    InitializeIndicatori() {
        for (let materia of this.documentiService.materieClasse) {
            this.documentiService.indicatori[materia] = {};

            for (let categoria of this.documentiService.categorieInd) {
                this.documentiService.indicatori[materia][categoria] = [];
            }
        }
    }

    SetModalNota(evento: { indicatore: any, materia: string, nota: string, categoria: string }) 
    {
        console.log("Nota ricevuta: ", evento.nota, " per materia: ", evento.materia, " categoria: ", evento.categoria, " indicatore: ", evento.indicatore);

        this.eventoNota = evento;
    }

    SetNota(nota: string) {
        console.log("Nota ricevuta: ", nota, " per materia: ", this.eventoNota.materia, " categoria: ", this.eventoNota.categoria, " indicatore: ", this.eventoNota.indicatore);

        const listaInd = this.documentiService.indicatori[this.eventoNota.materia][this.eventoNota.categoria];

        const index = listaInd.findIndex((item: any) => item.Id === this.eventoNota.indicatore.Id);

        if (index !== -1) {
            listaInd[index].nota = nota;
        }

        console.log(this.documentiService.indicatori);
    }
}
