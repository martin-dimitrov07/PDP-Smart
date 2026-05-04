import { Routes } from '@angular/router';
import { Indirizzi } from './main/indirizzi/indirizzi';
import { Classi } from './main/classi/classi';
import { Studenti } from './main/studenti/studenti';
import { Login } from './login/login';
import { docenteResolver } from './shared/utilities/docente-resolver';
import { DocumentiList } from './main/documenti/documenti-list/documenti-list';
import { NotFoundComponent } from './not-found-component/not-found-component';
import { DocumentiOptions } from './main/documenti/documenti-options/documenti-options';
import { DocumentiCreate } from './main/documenti/documenti-create/documenti-create';
import { FormStudenti } from './main/documenti/forms/form-studenti/form-studenti';
import { FormIndicatori } from './main/documenti/forms/form-indicatori/form-indicatori';
import { FormICF } from './main/documenti/forms/form-icf/form-icf';
import { FormAllegati } from './main/documenti/forms/form-allegati/form-allegati';
import { DocumentiEdit } from './main/documenti/documenti-edit/documenti-edit';
import { documentoResolver } from './shared/utilities/documento-resolver';

const formStepsCreate: Routes = [
    { path: "", redirectTo: "studenti", pathMatch: "full" },
    { path: "studenti", component: FormStudenti, data: { root: "crea" } },
    { path: "indicatori", component: FormIndicatori, data: { root: "crea" } },
    { path: "ICF", component: FormICF, data: { root: "crea" } },
    { path: "allegati", component: FormAllegati, data: { root: "crea" } }
];

const formStepsEdit: Routes = [
    { path: "", component: DocumentiEdit },
    { path: "indicatori", component: FormIndicatori, data: { root: "modifica" } },
    { path: "ICF", component: FormICF, data: { root: "modifica" } },
    { path: "allegati", component: FormAllegati, data: { root: "modifica" } }
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
                component: DocumentiOptions
            },
            {
                path: "lista",
                component: DocumentiList
            },
            {
                path: "crea",
                component: DocumentiCreate,
                children: formStepsCreate
            },
            {
                path: "modifica/:studenteEmail/:annoScolastico",
                resolve: { documento: documentoResolver },
                children: formStepsEdit
            }
        ]
    },
    {
        path: "**",
        component: NotFoundComponent,
    }
];