import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { DocumentiService } from '../../../../../shared/services/documenti.service';
import { Router } from '@angular/router';
import { CheckError } from '../../../../../shared/utilities/check-error';
import { FormsModule } from '@angular/forms';
import { CategoriaInd } from './categoria-ind/categoria-ind';
import { CommonModule, } from "@angular/common";

@Component({
    selector: 'app-form-indicatori',
    imports: [FormsModule, CategoriaInd, CommonModule],
    templateUrl: './form-indicatori.html',
    styleUrl: './form-indicatori.css',
})
export class FormIndicatori {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    private readonly router: Router = inject(Router);
    private readonly checkError: CheckError = inject(CheckError);

    datiCaricati: boolean = false;

    private readonly cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

    ngOnInit() {
        this.documentiService.step = "indicatori";
        
        if (this.documentiService.materieSelected.length > 0) {
            this.documentiService.materiaSelected = this.documentiService.materieSelected[0];

            for (const materia of this.documentiService.materieSelected) {
                this.SetIndicatori(materia);
            }
        }
        else {
            this.router.navigate(["documenti", "crea", "ICF"]);
        }
    }

    SetIndicatori(materia: string) {
        this.datiCaricati = false;
        // Forziamo Angular a capire che c'è stato un cambiamento
        this.cdr.detectChanges();

        this.documentiService.CaricaIndicatoriPerMateria(materia).subscribe({
            next: (data) => {
                console.log(data);

                this.datiCaricati = true;
                this.cdr.detectChanges();
            },
            error: (err) => this.checkError.checkError(err)
        });
    }

    SaveMaterie() {
        this.router.navigate(["documenti", "crea", "ICF"]);
    }
}
