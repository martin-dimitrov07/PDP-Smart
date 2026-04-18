import { inject, Injectable } from '@angular/core';
import { DocentiService } from './docenti.service';
import { DataStorageService } from './data-storage.service';

@Injectable({
    providedIn: 'root',
})
export class DocumentiService {
    private readonly dataStorageService = inject(DataStorageService);
    // private readonly router: Router = inject(Router);
    private readonly docentiService: DocentiService = inject(DocentiService);

    
}
