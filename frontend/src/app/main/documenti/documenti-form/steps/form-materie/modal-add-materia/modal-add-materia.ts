import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CheckError } from '../../../../../../shared/utilities/check-error';
import { DocumentiService } from '../../../../../../shared/services/documenti.service';
import { error } from 'console';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-add-materia',
  imports: [FormsModule],
  templateUrl: './modal-add-materia.html',
  styleUrl: './modal-add-materia.css',
})
export class ModalAddMateria {
    materia: String = '';
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    private readonly checkError: CheckError = inject(CheckError);

    @Output() materiaEvent = new EventEmitter<String>();

    ngOnInit(){
        this.documentiService.GetMaterieDocente().subscribe({
            next: () => {},
            error: (err: any) => this.checkError.checkError(err)
        })
    }

    SaveMateria(){
        this.materiaEvent.emit(this.materia);
    }
}
