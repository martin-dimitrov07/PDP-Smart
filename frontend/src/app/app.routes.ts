import { Routes } from '@angular/router';
import { Indirizzi } from './main/indirizzi/indirizzi';
import { Classi } from './main/classi/classi';
import { Studenti } from './main/studenti/studenti';
import { Documenti } from './main/documenti/documenti';
import { Login } from './login/login';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/indirizzi",
        pathMatch: "full"
    },
    {
        path: "login",
        component: Login
    },
    {
        path: "indirizzi",
        component: Indirizzi
    },
    {
        path: "classi",
        component: Classi
    },
    {
        path: "studenti",
        component: Studenti
    },
    {
        path: "documenti",
        component: Documenti
    }
];
