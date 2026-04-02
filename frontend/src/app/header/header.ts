import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DocentiService } from '../shared/services/docenti.service';

@Component({
    selector: 'app-header',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './header.html',
    styleUrl: './header.css',
})
export class Header {
    public readonly docentiService: DocentiService = inject(DocentiService);
}
