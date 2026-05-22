import { Component, inject } from '@angular/core';
import { StudentiService } from '../../shared/services/studenti.service';
import { CheckError } from '../../shared/utilities/check-error';
import { IndirizziCard } from "./indirizzi-card/indirizzi-card";

@Component({
    selector: 'app-indirizzi',
    imports: [IndirizziCard],
    templateUrl: './indirizzi.html',
    styleUrl: './indirizzi.css',
})
export class Indirizzi {
    public readonly studentiService: StudentiService = inject(StudentiService);
    private readonly checkError: CheckError = inject(CheckError);

    isLoading: boolean = false;

    ngOnInit() {
        this.isLoading = true;
        this.studentiService.GetIndirizzi().subscribe({
            next: (data: any) => {
                this.isLoading = false;
            },
            error: (err: any) => {
                this.checkError.checkError(err);
                this.isLoading = false;
            }
        });
    }
}
