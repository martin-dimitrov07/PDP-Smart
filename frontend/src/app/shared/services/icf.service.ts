import { inject, Injectable, Injector } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { Icf } from '../../models/icf';
import { DocumentiService } from './documenti.service';
import { of, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class IcfService {
    private readonly dataStorageService: DataStorageService = inject(DataStorageService);

    private readonly injector: Injector = inject(Injector);
    private get documentiService(): DocumentiService {
        return this.injector.get(DocumentiService);
    }

    icfs: Icf[] = [];
    icfsSelected: Icf[] = [];
    icfsEdit: any[] = [];
    newIcfs: Icf[] = [];

    GetICFs() {
        this.icfs = [];

        return this.dataStorageService.InviaRichiesta("GET", "/icfs")?.pipe(tap((data: any) => {
            this.icfs = data.map((icf: Icf) => new Icf(icf.Codice, icf.Descrizione));
        }))
    }

    GetICFSDocumento() {
        if (!this.documentiService.documentoSelected)
            return of(null);

        const filters = {
            Documenti_ICF: {
                some: {
                    Documento_Studente_Email: this.documentiService.documentoSelected.Studente_Email,
                    Documento_Anno: this.documentiService.documentoSelected.Anno
                }
            }
        }

        return this.dataStorageService.InviaRichiesta("GET", "/icfs", { filters: JSON.stringify(filters) })!.pipe(tap((data: any) => {
            this.icfsSelected = (data && Array.isArray(data))
                ? data.map((icf: Icf) => new Icf(icf.Codice, icf.Descrizione))
                : [];
            console.log(this.icfsSelected);
        }));
    }

    UpdateICFsDocumento() {
        if (!this.documentiService.documentoSelected) 
            return;

        const payload = {
            documento: this.documentiService.documentoSelected,
            icfs: this.icfsEdit
        }

        return this.dataStorageService.InviaRichiesta("PATCH", "/icfs/update", payload)!;
    }

    CreateICFs(icfs: Icf[]) {
        if (icfs.length == 0) return;

        const payload = {
            icfs: icfs
        }

        return this.dataStorageService.InviaRichiesta("POST", "/icfs/create", payload)!;
    }
}
