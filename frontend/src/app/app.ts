import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { DocentiService } from './shared/services/docenti.service';
import { filter } from 'rxjs';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Header],
    templateUrl: './app.html',
    styleUrl: './app.css'
})

export class App {
    public readonly router: Router = inject(Router);
    public readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
}
