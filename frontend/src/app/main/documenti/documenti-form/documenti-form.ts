import { Component, inject } from '@angular/core';
import { StudentiService } from '../../../shared/services/studenti.service';
import { CheckError } from '../../../shared/utilities/check-error';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-documenti-form',
    imports: [RouterOutlet],
    templateUrl: './documenti-form.html',
    styleUrl: './documenti-form.css',
})
export class DocumentiForm {
    public readonly studentiService: StudentiService = inject(StudentiService);
    private readonly checkError: CheckError = inject(CheckError);

    ngOnInit() {
        this.studentiService.GetAnniScolastici().subscribe({
            next: (data: any) => {
            },
            error: (err: any) => this.checkError.checkError(err)
        });
    }
}
