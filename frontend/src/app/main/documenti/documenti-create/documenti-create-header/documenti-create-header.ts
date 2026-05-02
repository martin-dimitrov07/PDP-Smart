import { Component, inject } from '@angular/core';
import { StudentiService } from '../../../../shared/services/studenti.service';

@Component({
    selector: 'app-documenti-create-header',
    imports: [],
    templateUrl: './documenti-create-header.html',
    styleUrl: './documenti-create-header.css',
})
export class DocumentiCreateHeader {
    public readonly studentiService: StudentiService = inject(StudentiService);
}
