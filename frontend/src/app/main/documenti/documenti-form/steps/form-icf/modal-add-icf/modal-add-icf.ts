import { Component, EventEmitter, inject, Output } from '@angular/core';
import { DocumentiService } from '../../../../../../shared/services/documenti.service';
import { Icf } from '../../../../../../models/icf';
import { FormsModule } from '@angular/forms';
import { CheckError } from '../../../../../../shared/utilities/check-error';

@Component({
  selector: 'app-modal-add-icf',
  imports: [FormsModule],
  templateUrl: './modal-add-icf.html',
  styleUrl: './modal-add-icf.css',
})
export class ModalAddIcf {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    private readonly checkError: CheckError = inject(CheckError);

    @Output() icfEvent = new EventEmitter<Icf[]>();

    icfValue: string = "";

    ngOnInit(){
        // this.documentiService.GetICFs()?.subscribe({
        //     next: (data) => { },
        //     error: (err) => this.checkError.checkError(err)
        // })
    }

    SaveICF(){
        console.log(this.icfValue);
    }
}
