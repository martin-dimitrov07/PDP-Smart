import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Header } from './header/header';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Header],
    templateUrl: './app.html',
    styleUrl: './app.css'
})

export class App {
    public router: Router = inject(Router);
}
