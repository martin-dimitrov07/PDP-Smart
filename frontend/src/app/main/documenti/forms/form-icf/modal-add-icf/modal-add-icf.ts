import { Component, EventEmitter, inject, Output } from '@angular/core';
import { DocumentiService } from '../../../../../shared/services/documenti.service';
import { CheckError } from '../../../../../shared/utilities/check-error';
import { FormsModule } from '@angular/forms';
import { Icf } from '../../../../../models/icf';

@Component({
  selector: 'app-modal-add-icf',
  imports: [FormsModule],
  templateUrl: './modal-add-icf.html',
  styleUrl: './modal-add-icf.css',
})
export class ModalAddIcf {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    private readonly checkError: CheckError = inject(CheckError);

    @Output() icfEvent = new EventEmitter<Icf>();

    icfValue: string = "";

    ngOnInit(){
        this.documentiService.GetICFs()?.subscribe({
            next: (data) => { },
            error: (err) => this.checkError.checkError(err)
        })
    }

    SetICF(){
        const icfsCod = this.documentiService.icfs.map(icf => icf.Codice);

        if(icfsCod.includes(this.icfValue))
            document.querySelector(".modal-footer .btn-primary")!.classList.remove("disabled");
        else
            document.querySelector(".modal-footer .btn-primary")!.classList.add("disabled");

        // console.log(document.querySelector(".btn-primary"));
        // console.log(this.icfValue);
        // console.log(icfsCod);
    }

    SaveICF(){
        this.icfEvent.emit(new Icf(this.icfValue, document.getElementById(this.icfValue)!.textContent));
        this.icfValue = "";
    }
}
