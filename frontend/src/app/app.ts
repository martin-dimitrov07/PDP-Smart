import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Login } from './login/login';
import { Studenti } from './studenti/studenti';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Header, Login, Studenti],
    templateUrl: './app.html',
    styleUrl: './app.css'
})

export class App {

}
