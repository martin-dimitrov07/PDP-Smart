import { Component, ElementRef, inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { Studente } from '../../../../../models/studente';
import { ModalAddStudente } from './modal-add-studente/modal-add-studente';
import { Router } from '@angular/router';
import { DocumentiService } from '../../../../../shared/services/documenti.service';
import { CheckError } from '../../../../../shared/utilities/check-error';
@Component({
    selector: 'app-form-studenti',
    imports: [FormsModule, CommonModule, ModalAddStudente],
    templateUrl: './form-studenti.html',
    styleUrl: './form-studenti.css',
})
export class FormStudenti {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    private readonly checkError: CheckError = inject(CheckError);
    private readonly router: Router = inject(Router);

    SaveStudente(studente: Studente) {
        if(this.documentiService.studentiSelected.findIndex(s => s.Email == studente.Email) == -1) {
            this.documentiService.studentiSelected.push(new Studente(
                studente.Nome,
                studente.Cognome,
                studente.Email,
                studente.DSA_BES
            ));
        }
    }

    RemoveStudente(email: string) {
        this.documentiService.studentiSelected.splice(this.documentiService.studentiSelected.findIndex(s => s.Email == email), 1);
    }

    SaveStudenti() {
        this.documentiService.CreateDocumenti().subscribe({
            next: (data: any) => {
                console.log(data);
            },
            error: (err: any) => this.checkError.checkError(err)
        });
        
        this.router.navigate(["documenti", "crea", "materie"]);
    }
}
