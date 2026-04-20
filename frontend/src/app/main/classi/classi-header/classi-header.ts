import { Component, EventEmitter, inject, Output } from '@angular/core';
import { StudentiService } from '../../../shared/services/studenti.service';

@Component({
    selector: 'app-classi-header',
    imports: [],
    templateUrl: './classi-header.html',
    styleUrl: './classi-header.css',
})
export class ClassiHeader {
    @Output() annoScolastico = new EventEmitter<Date>();

    public readonly studentiService: StudentiService = inject(StudentiService);

    SetFilterAnnoScolastico(annoScolastico: Date) {
        this.annoScolastico.emit(annoScolastico);
    }
}
