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

const formStepsCreate: Routes = [
    { path: "", redirectTo: "studenti", pathMatch: "full" },
    { path: "studenti", component: FormStudenti },
    { path: "indicatori", component: FormIndicatori },
    { path: "ICF", component: FormICF },
    { path: "allegati", component: FormAllegati }
];

const formStepsEdit: Routes = [
    { path: "", component: DocumentiEdit },
    { path: "indicatori", component: FormIndicatori },
    { path: "ICF", component: FormICF },
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
                // path: "edit/:studenteEmail/:annoScolastico",
                path: "modifica",
                component: DocumentiEdit,
                children: formStepsEdit
            }
        ]
    },
    {
        path: "**",
        component: NotFoundComponent,
    }
];