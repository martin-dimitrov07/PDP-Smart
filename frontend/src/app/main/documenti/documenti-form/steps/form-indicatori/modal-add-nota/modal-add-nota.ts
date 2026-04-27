import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-modal-add-nota',
    imports: [FormsModule],
    templateUrl: './modal-add-nota.html',
    styleUrl: './modal-add-nota.css',
})
export class ModalAddNota {
    @Input() nota: string = "";

    @Output() notaEvent = new EventEmitter<string>();

    ngOnInit(){
        console.log("Nota ricevuta: ", this.nota);
    }

    SaveNota() {
        this.notaEvent.emit(this.nota);
    }
}
