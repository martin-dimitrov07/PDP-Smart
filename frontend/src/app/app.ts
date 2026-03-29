import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
// import { Login } from './login/login';
// import { Studenti } from './studenti/studenti';
import { Sezioni } from './main/sezioni/sezioni';
import { Login } from './login/login';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Sezioni, Header, Login],
    templateUrl: './app.html',
    styleUrl: './app.css'
})

export class App {

}
