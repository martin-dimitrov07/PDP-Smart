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
import { ruoloDocenteGuard } from './shared/utilities/ruolo-docente.guard';

const formSteps: Routes = [
    { path: "", redirectTo: "studenti", pathMatch: "full" },
    { path: "studenti", component: FormStudenti },
    { path: "indicatori", component: FormIndicatori },
    { path: "ICF", component: FormICF },
    { path: "allegati", component: FormAllegati }
];

export const routes: Routes = [
    // 1. ROTTA PUBBLICA
    {
        path: "login",
        component: Login
    },

    // 2. ROTTE PROTETTE
    {
        path: "",
        // canActivate: [ruoloDocenteGuard],
        // canActivateChild: [ruoloDocenteGuard],
        resolve: { docente: docenteResolver },
        children: [
            {
                path: "",
                redirectTo: "indirizzi",
                pathMatch: "full"
            },
            {
                path: "indirizzi",
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
                children: [
                    {
                        path: "",
                        component: Documenti
                    },
                    {
                        path: "lista",
                        component: DocumentiList
                    },
                    {
                        path: "crea",
                        component: DocumentiForm,
                        children: formSteps
                    },
                    {
                        path: "edit/:id",
                        component: DocumentiForm,
                        children: formSteps
                    }
                ]
            }
        ]
    },

    // 3. FALLBACK (404)
    {
        path: "**",
        component: NotFoundComponent,
    }
];