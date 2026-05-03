import { Component, inject } from '@angular/core';
import { StudentiService } from '../../../../shared/services/studenti.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-documenti-create-header',
    imports: [RouterLink],
    templateUrl: './documenti-create-header.html',
    styleUrl: './documenti-create-header.css',
})
export class DocumentiCreateHeader {
    public readonly studentiService: StudentiService = inject(StudentiService);

    public get CurrentYear(): string {
        const date = new Date();
        let annoData = date.getFullYear();
        if (date.getMonth() < 8) {
            annoData -= 1;
        }
        return `${annoData}/${annoData + 1}`;
    }
}
