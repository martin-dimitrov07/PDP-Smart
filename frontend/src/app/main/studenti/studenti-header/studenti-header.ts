import { NgClass } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { StudentiService } from '../../../shared/services/studenti.service';
import { ClassiService } from '../../../shared/services/classi.service';
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-studenti-header',
    imports: [NgClass, RouterLink],
    templateUrl: './studenti-header.html',
    styleUrl: './studenti-header.css',
})
export class StudentiHeader {
    @Input() indirizzo!: string;
    @Input() iconClass!: string;
    @Input() nStudenti!: number;

    public readonly studentiService: StudentiService = inject(StudentiService);
    public readonly classiService: ClassiService = inject(ClassiService);
}
