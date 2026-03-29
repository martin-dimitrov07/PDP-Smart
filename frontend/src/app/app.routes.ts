import { Routes } from '@angular/router';
import { Sezioni } from './main/sezioni/sezioni';
import { Classi } from './main/classi/classi';
import { Studenti } from './main/studenti/studenti';
import { Documenti } from './main/documenti/documenti';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/sezioni",
        pathMatch: "full"
    },
    {
        path: "sezioni",
        component: Sezioni,
        children: [
            {
                path: ':sezioneId/classi',
                component: Classi,
                children: [
                    {
                        path: ":classeId/studenti",
                        component: Studenti
                    }
                ]
            }
        ]
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
