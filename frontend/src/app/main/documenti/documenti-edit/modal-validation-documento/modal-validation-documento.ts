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

    async validateDocumento() {
        this.documentiService.ApprovaDocumento()?.subscribe({
            next: () => {
                this.documentiService.GetDocumentoById(this.documentiService.documentoSelected.Studente_Email, this.documentiService.documentoSelected.Anno!).subscribe({
                    next: (res) => {
                        if (res) {
                            this.documentiService.SaveDocumentoApprovato(this.documentiService.documentoSelected).subscribe({
                                next: () => {
                                    console.log("Documento approvato e salvato con successo")
                                },
                                error: (err: any) => this.checkError.checkError(err)
                            });
                        }
                    },
                    error: (err: any) => this.checkError.checkError(err)
                });
                this.router.navigate(['documenti', 'lista']);
            },
            error: (err: any) => this.checkError.checkError(err)
        });
    }
}
