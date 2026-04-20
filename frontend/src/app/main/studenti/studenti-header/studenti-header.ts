import { NgClass } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { StudentiService } from '../../../shared/services/studenti.service';

@Component({
    selector: 'app-studenti-header',
    imports: [NgClass],
    templateUrl: './studenti-header.html',
    styleUrl: './studenti-header.css',
})
export class StudentiHeader {
    @Input() indirizzo!: string;
    @Input() iconClass!: string;
    @Input() nStudenti!: number;

    public readonly studentiService: StudentiService = inject(StudentiService);
}
