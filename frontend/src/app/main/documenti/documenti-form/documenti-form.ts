import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { StudentiService } from '../../../shared/services/studenti.service';
import { CheckError } from '../../../shared/utilities/check-error';
import { RouterOutlet } from '@angular/router';
import { StepBar } from './step-bar/step-bar';
import { Router } from '@angular/router';

@Component({
    selector: 'app-documenti-form',
    imports: [RouterOutlet, StepBar],
    templateUrl: './documenti-form.html',
    styleUrl: './documenti-form.css',
})
export class DocumentiForm {
    public readonly studentiService: StudentiService = inject(StudentiService);
    private readonly checkError: CheckError = inject(CheckError);
    private readonly router: Router = inject(Router);
    public avanzamento: String = "studenti";

    Avanzamento(tappa: String){
        this.avanzamento = tappa;
    }

    ngOnInit() {
        this.router.navigate(["documenti", "crea"]);
        
        this.studentiService.GetAnniScolastici().subscribe({
            next: (data: any) => {
            },
            error: (err: any) => this.checkError.checkError(err)
        });
    }
}
