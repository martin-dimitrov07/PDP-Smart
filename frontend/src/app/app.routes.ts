import { Routes } from '@angular/router';
import { Indirizzi } from './main/indirizzi/indirizzi';
import { Classi } from './main/classi/classi';
import { Studenti } from './main/studenti/studenti';
import { Documenti } from './main/documenti/documenti';
import { Login } from './login/login';
import { docenteResolver } from './shared/utilities/docente-resolver';
import { DocumentiList } from './main/documenti/documenti-list/documenti-list';
import { DocumentiForm } from './main/documenti/documenti-form/documenti-form';
import { NotFoundComponent } from './not-found-component/not-found-component';
import { FormStudenti } from './main/documenti/documenti-form/steps/form-studenti/form-studenti';
import { FormIndicatori } from './main/documenti/documenti-form/steps/form-indicatori/form-indicatori';
import { FormICF } from './main/documenti/documenti-form/steps/form-icf/form-icf';
import { FormAllegati } from './main/documenti/documenti-form/steps/form-allegati/form-allegati';
import { Ruolo } from './models/docente';
import { ruoloDocenteGuard } from './shared/utilities/ruolo-docente.guard';

const formSteps: Routes = [
    { path: "", redirectTo: "studenti", pathMatch: "full" },
    { path: "studenti", component: FormStudenti },
    { path: "indicatori", component: FormIndicatori },
    {
        path: "ICF",
        component: FormICF,
        canActivate: [ruoloDocenteGuard],
        data: { roles: [Ruolo.ADMIN] }
    },
    { path: "allegati", component: FormAllegati }
];

export const routes: Routes = [
    {
        path: "",
        redirectTo: "indirizzi",
        pathMatch: "full"
    },
    {
        path: "login",
        component: Login
    },
    {
        path: "indirizzi",
        resolve: { docente: docenteResolver },
        children: [
            {
                path: "",
                component: Indirizzi
            },
            {
                path: ":indirizzo/classi",
                children: [
                    {
                        path: "",
                        component: Classi
                    },
                    {
                        path: ":idClasse/studenti",
                        component: Studenti
                    }
                ]
            }
        ]
    },
    {
        path: "documenti",
        resolve: { docente: docenteResolver },
        children: [
            {
                path: "",
                component: Documenti,
                canActivate: [ruoloDocenteGuard],
                data: { roles: [Ruolo.COORDINATORE, Ruolo.ADMIN] }
            },
            {
                path: "lista",
                component: DocumentiList
            },
            {
                path: "crea",
                component: DocumentiForm,
                children: formSteps,
                canActivate: [ruoloDocenteGuard],
                data: { roles: [Ruolo.COORDINATORE, Ruolo.ADMIN] }
            },
            {
                path: "edit/:id",
                component: DocumentiForm,
                children: formSteps
            }
        ]
    },
    {
        path: "**",
        component: NotFoundComponent,
    }
];