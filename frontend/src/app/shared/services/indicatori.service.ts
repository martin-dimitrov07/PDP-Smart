import { inject, Injectable, Injector } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { Indicatore } from '../../models/indicatore';
import { map, of, tap } from 'rxjs';
import { DocumentiService } from './documenti.service';
import { MaterieService } from './materie.service';
import { CheckError } from '../utilities/check-error';

@Injectable({
    providedIn: 'root',
})
export class IndicatoriService {
    private readonly dataStorageService: DataStorageService = inject(DataStorageService);
    private readonly materieService: MaterieService = inject(MaterieService);
    private readonly checkError: CheckError = inject(CheckError);

    private readonly injector: Injector = inject(Injector);
    private get documentiService(): DocumentiService {
        return this.injector.get(DocumentiService);
    }

    // indicatori = {
    //     "matematica": 
    //         {
    //             "criteri": [ { id: "Id", Nota: "Nota" }, ... ],
    //             "categoria": []
    //         },
    // }

    indicatori: any = {};
    indicatoreSelected: any = {};
    indicatoriDoc: any[] = [];
    indicatoriEdit: any[] = [];

    categorieInd: string[] = [];

    GetIndicatori(categoria: string = "", tipologia: string) {
        let filters: any = {};

        if (categoria) {
            filters.Categoria = categoria;
        }

        if (tipologia) {
            filters.Tipologia = { in: [tipologia, "ENTRAMBI"] }
        }

        return this.dataStorageService.InviaRichiesta("GET", "/indicatori", { filters: JSON.stringify(filters) })!.pipe(tap((data: any) => {
            // console.log(data);
            return data.map((ind: Indicatore) => new Indicatore(ind.Id, ind.Tipologia, ind.Categoria, ind.Descrizione));
        }));
    }

    GetIndicatoriDocumento() {
        if (!this.documentiService.documentoSelected) return of(null);

        const filters = {
            Documento_Studente_Email: this.documentiService.documentoSelected.Studente_Email,
            Documento_Anno: this.documentiService.documentoSelected.Anno
        }

        return this.dataStorageService.InviaRichiesta("GET", "/indicatori-documento", { filters: JSON.stringify(filters) })!.pipe(tap((data: any) => {
            this.indicatoriDoc = data || [];
            console.log(this.indicatoriDoc);
        }));
    }

    InitializeIndicatori() {
        this.indicatori = {};

        for (let materia of this.materieService.materieClasse) {
            this.indicatori[materia] = {};

            for (let categoria of this.categorieInd) {
                this.indicatori[materia][categoria] = [];
            }
        }
    }

    SetIndicatori() {
        this.GetIndicatoriDocumento()?.subscribe({
            next: () => {
                for (let indicatore of this.indicatoriDoc) {
                    if (this.indicatori[indicatore.Materia]) {
                        this.indicatori[indicatore.Materia][indicatore.Categoria].push({ Id: indicatore.Id, Nota: indicatore.Nota });
                    }
                }
            },
            error: (err) => this.checkError.checkError(err)
        })
    }

    UpdateIndicatoriDocumento() {
        if (!this.documentiService.documentoSelected) return;

        const payload = {
            documento: this.documentiService.documentoSelected,
            indicatori: this.indicatoriEdit
        }

        return this.dataStorageService.InviaRichiesta("PATCH", "/indicatori/update", payload)!;
    }

    GetCategorieIndicatore() {
        return this.dataStorageService.InviaRichiesta("GET", "/indicatori")!.pipe(map((data: any) => {
            this.categorieInd = [...new Set<string>(data.map((ind: Indicatore) => ind.Categoria))];
            return this.categorieInd;
        }));
    }

}