import { Component, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { IndirizziStyle } from '../../../shared/directives/indirizzi-style';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StudentiService } from '../../../shared/services/studenti.service';

@Component({
    selector: 'app-indirizzi-card',
    imports: [IndirizziStyle, CommonModule],
    templateUrl: './indirizzi-card.html',
    styleUrl: './indirizzi-card.css',
})
export class IndirizziCard {
    @Input() indirizzo!: string;
    private readonly router: Router = inject(Router);
    public readonly studentiService: StudentiService = inject(StudentiService);


    GoClassi(indirizzo: string) {
        this.studentiService.indirizzoSelected = indirizzo;

        this.router.navigate(["indirizzi", indirizzo, "classi"]);
    }
}
