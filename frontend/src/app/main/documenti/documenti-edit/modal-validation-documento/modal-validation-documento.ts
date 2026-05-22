import { Component, inject } from '@angular/core';
import { DocumentiService } from '../../../../shared/services/documenti.service';
import { CheckError } from '../../../../shared/utilities/check-error';
import { Router } from '@angular/router';

@Component({
    selector: 'app-modal-validation-documento',
    imports: [],
    templateUrl: './modal-validation-documento.html',
    styleUrl: './modal-validation-documento.css',
})
export class ModalValidationDocumento {
    private readonly documentiService: DocumentiService = inject(DocumentiService);
    private readonly checkError: CheckError = inject(CheckError);
    private readonly router: Router = inject(Router);

    validateDocumento(){
        this.documentiService.ApprovaDocumento().subscribe({
            next: () => {
                this.router.navigate(['documenti', 'lista']);
            },
            error: (err: any) => this.checkError.checkError(err)
        });
    }
}
