import { Component, EventEmitter, inject, Output } from '@angular/core';
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

    @Output() onValidation = new EventEmitter<void>();

    async validateDocumento() {
        this.onValidation.emit();

        this.documentiService.ApprovaDocumento()?.subscribe({
            next: () => {
                if (!this.documentiService.documentoSelected) {
                    this.router.navigate(['documenti', 'lista']);
                    return;
                }
                
                this.documentiService.GetDocumentoById(this.documentiService.documentoSelected?.Studente_Email, this.documentiService.documentoSelected?.Anno!).subscribe({
                    next: (res) => {
                        if (res) {
                            if (!this.documentiService.documentoSelected) {
                                this.router.navigate(['documenti', 'lista']);
                                return;
                            }

                            this.documentiService.SaveDocumentoApprovato(this.documentiService.documentoSelected).subscribe({
                                next: () => {
                                    this.router.navigate(['documenti', 'lista']);
                                    console.log("Documento approvato e salvato con successo")
                                },
                                error: (err: any) => this.checkError.checkError(err)
                            });
                        }
                    },
                    error: (err: any) => this.checkError.checkError(err)
                });
            },
            error: (err: any) => this.checkError.checkError(err)
        });
    }
}
