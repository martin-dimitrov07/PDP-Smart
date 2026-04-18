import { Component, ElementRef, inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { Studente } from '../../../../../models/studente';
import { ModalAddStudente } from './modal-add-studente/modal-add-studente';
import { Router } from '@angular/router';
@Component({
    selector: 'app-form-studenti',
    imports: [FormsModule, CommonModule, ModalAddStudente],
    templateUrl: './form-studenti.html',
    styleUrl: './form-studenti.css',
})
export class FormStudenti {
    studentiSelected: Studente[] = [];

    private readonly router: Router = inject(Router);

    SaveStudente(studente: Studente) {
        if(this.studentiSelected.findIndex(s => s.Email == studente.Email) == -1) {
            this.studentiSelected.push(new Studente(
                studente.Nome,
                studente.Cognome,
                studente.Email,
                studente.DSA_BES
            ));
        }
    }

    RemoveStudente(email: string) {
        this.studentiSelected.splice(this.studentiSelected.findIndex(s => s.Email == email), 1);
    }

    SaveStudenti() {

        this.router.navigate(["documenti", "crea", "materie"]);
    }
}
