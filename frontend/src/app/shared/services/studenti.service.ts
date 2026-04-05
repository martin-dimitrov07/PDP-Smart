import { inject, Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { Studente } from '../../models/studente';
import { Classe } from '../../models/classe';
import { Ruolo } from '../../models/docente';
import { DocentiService } from './docenti.service';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class StudentiService {
    private readonly dataStorageService = inject(DataStorageService);
    private readonly router: Router = inject(Router);
    private readonly docentiService: DocentiService = inject(DocentiService);

    indirizzi: string[] = [];
    indirizzoSelected?: string;

    anniScolastici: Date[] = [];

    classi: any = {};
    nClassi: number = 0;
    classeSelected: number = 0;

    studenti: Studente[] = [];

    GetIndirizzi() {
        const filters = this.docentiService.docente.Ruolo == Ruolo.DOCENTE ? {
            Insegnamenti: {
                some: {  // serve per relazioni uno a molti
                    Docente_Email: this.docentiService.docente.Email
                }
            }
        } : {};

        const params = {
            filters: JSON.stringify(filters),
            distinct: "Indirizzo"
        }

        console.log(this.docentiService.docente);

        this.dataStorageService.InviaRichiesta("GET", "/indirizzi", params)?.subscribe({
            next: (data: any) => {
                this.indirizzi = Array.from(data).map((item: any) => item.Indirizzo);
                console.log(this.indirizzi);
            },
            error: (err: any) => {
                if (err.status == 401) {
                    this.router.navigate(["/login"]);
                }
                else
                    console.error(err.status + ": " + err.error);
            }
        });
    }

    GetClassi(filterClassi: any, filterAnnoScolastico: any) {
        let filters: any = this.docentiService.docente.Ruolo == Ruolo.DOCENTE ? {
            Insegnamenti: {
                some: {  // serve per relazioni uno a molti
                    Docente_Email: this.docentiService.docente.Email
                }
            },
            Indirizzo: this.indirizzoSelected
        } : {
            Indirizzo: this.indirizzoSelected
        };

        if (filterClassi["in"])
            filters.Classe = filterClassi;

        if (filterAnnoScolastico)
            filters.Anno_Scolastico = filterAnnoScolastico;

        const params = {
            filters: JSON.stringify(filters)
        }

        console.log(filters);

        this.dataStorageService.InviaRichiesta("GET", "/classi", params)?.subscribe({
            next: (data: any) => {
                this.classi = data;
                console.log(this.classi);
            },
            error: (err: any) => {
                if (err.status == 401) {
                    this.router.navigate(["/login"]);
                }
                else
                    console.error(err.status + ": " + err.error);
            }
        });
    }

    async GetAnniScolastici() {
        try {

            const params: any = {};
            if (this.indirizzoSelected)
                params["Indirizzo"] = this.indirizzoSelected;

            // Aspetta il primo valore (o l'errore)
            const data: any = await firstValueFrom(this.dataStorageService.InviaRichiesta("GET", "/anni-scolastici", params)!);

            this.anniScolastici = Array.from(data).map((item: any) => new Date(item));
            console.log(new Date(data), new Date(data).getFullYear().toString());
        }
        catch (err: any) {
            if (err.status === 401) {
                this.router.navigate(["/login"]);
            } else {
                console.error("Errore API:", err.status, err.error);
            }
        }
    }

    async GetNumeroClassi() {
        const filters: any = {
            Indirizzo: this.indirizzoSelected
        }

        this.dataStorageService.InviaRichiesta("GET", "/count-classi", { filters: JSON.stringify(filters) })?.subscribe({
            next: (data: any) => {
                this.nClassi = data.countClassi[0]._count._all;
                console.log(this.nClassi);
                console.log(data);
            },
            error: (err: any) => {
                if (err.status == 401)
                    this.router.navigate(["/login"]);
                else
                    console.error("Errore API:", err.status, err.error);
            }
        });
    }

    async GetNumeroStudenti(classeId: number): Promise<number> {
        const filters: any = {
            Classe_Id: classeId
        }

        try {
            const data: any = await firstValueFrom(this.dataStorageService.InviaRichiesta("GET", "/count-studenti", { filters: JSON.stringify(filters) })!);
            console.log(data);
            return data.countStudenti;
        }
        catch (err: any) {
            if (err.status == 401)
                this.router.navigate(["/login"]);
            else
                console.error("Errore API:", err.status, err.error);

            return 0; // Ritorna 0 in caso di errore
        }
    }
}
