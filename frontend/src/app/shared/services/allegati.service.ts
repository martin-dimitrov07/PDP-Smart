import { inject, Injectable, Injector } from '@angular/core';
import { Allegato } from '../../models/allegato';
import { DataStorageService } from './data-storage.service';
import { DocumentiService } from './documenti.service';
import { of, tap } from 'rxjs';
import { fileManager } from '../utilities/file-manager';

@Injectable({
    providedIn: 'root',
})
export class AllegatiService {
    private readonly dataStorageService: DataStorageService = inject(DataStorageService);
    // serve per evitare dipendenze circolari con documentiService, che a sua volta dipende da allegatiService
    private readonly injector: Injector = inject(Injector);
    private get documentiService(): DocumentiService {
        return this.injector.get(DocumentiService);
    }

    allegati: Allegato[] = [];
    errorAllegati: string = "";
    allegatiDoc: Allegato[] = [];
    allegatiEdit: any[] = [];

    GetAllegatiDocumento() {
        if (!this.documentiService.documentoSelected) return of(null);

        const filters = {
            Documento_Studente_Email: this.documentiService.documentoSelected.Studente_Email,
            Documento_Anno: this.documentiService.documentoSelected.Anno
        };

        return this.dataStorageService.InviaRichiesta("GET", "/allegati", { filters: JSON.stringify(filters) })!.pipe(tap((data: any) => {
            this.allegatiDoc = (Array.isArray(data)) ?
                data.map((allegato: any) => {
                    if (allegato && allegato.FileBase64) {
                        return new Allegato(
                            allegato.Id,
                            fileManager.convertBase64ToFile(allegato.FileBase64, allegato.Nome, allegato.Tipo)
                        );
                    }
                    return null;
                }).filter(a => a != null)
                : [];
            console.log(this.allegatiDoc);
        }))!;
    }

    UpdateAllegatiDocumento() {
        if (!this.documentiService.documentoSelected) return;

        const formData: FormData = new FormData();

        formData.append('documento', JSON.stringify(this.documentiService.documentoSelected));

        for (const file of this.allegatiEdit) {
            if (file.Value)
                formData.append('allegatiAdd', file.Allegato.File);
            else
                formData.append('allegatiDelete', file.Allegato.Id);
        }

        return this.dataStorageService.InviaRichiesta("PATCH", "/allegati/update", formData)!;
    }
}
