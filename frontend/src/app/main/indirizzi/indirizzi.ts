import { Component, inject } from '@angular/core';
import { StudentiService } from '../../shared/services/studenti.service';
import { Router } from '@angular/router';
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

    ngOnInit() {
        this.studentiService.GetIndirizzi().subscribe({
            next: (data: any) => { },
            error: (err: any) => this.checkError.checkError(err)
        });
    }
}
