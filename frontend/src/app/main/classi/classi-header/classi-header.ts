import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { StudentiService } from '../../../shared/services/studenti.service';
import { NgClass } from '@angular/common';
import { DocumentiService } from '../../../shared/services/documenti.service';

@Component({
    selector: 'app-classi-header',
    imports: [NgClass],
    templateUrl: './classi-header.html',
    styleUrl: './classi-header.css',
})
export class ClassiHeader {
    @Input() IconClass!: string;
    @Output() annoScolastico = new EventEmitter<Date>();

    public readonly studentiService: StudentiService = inject(StudentiService);

    SetFilterAnnoScolastico(annoScolastico: Date) {
        this.annoScolastico.emit(annoScolastico);
    }
}
