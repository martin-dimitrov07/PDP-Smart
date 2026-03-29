import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DataStorageService } from './data-storage.service';

@Injectable({
    providedIn: 'root',
})
export class StudentiService {
    private dataStorageService = inject(DataStorageService);
    
    sezioniDoc = [];
    sezioneSelected = "";
    classe = "";
    studenti = [];


    GetSections(): Observable<any> {
        return this.dataStorageService.InviaRichiesta("GET", "/sezioni", { docenteId: this.sezioneSelected } )!
            .pipe(tap((data: any) => {
                this.sezioniDoc = data;
                console.log(this.sezioniDoc);
            }));
    }

}
