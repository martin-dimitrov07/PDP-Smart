import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { StudentiService } from '../../../shared/services/studenti.service';

@Component({
    selector: 'app-classi-filters',
    imports: [CommonModule],
    templateUrl: './classi-filters.html',
    styleUrl: './classi-filters.css',
})
export class ClassiFilters {
    @Input() IconClass!: string;
    @Output() anno = new EventEmitter<number>();

    public readonly studentiService: StudentiService = inject(StudentiService);

    SetFilterAnno(anno: number) {
        this.anno.emit(anno);
    }
}
