import { Component, ElementRef, EventEmitter, inject, Output, ViewChild } from '@angular/core';
import { DocumentiService } from '../../../../../shared/services/documenti.service';
import { CheckError } from '../../../../../shared/utilities/check-error';
import { FormsModule } from '@angular/forms';
import { Icf } from '../../../../../models/icf';
import { IcfService } from '../../../../../shared/services/icf.service';

@Component({
    selector: 'app-modal-add-icf',
    imports: [FormsModule],
    templateUrl: './modal-add-icf.html',
    styleUrl: './modal-add-icf.css',
})
export class ModalAddIcf {
    public readonly documentiService: DocumentiService = inject(DocumentiService);
    public readonly icfService: IcfService = inject(IcfService);
    private readonly checkError: CheckError = inject(CheckError);

    @Output() icfEvent = new EventEmitter<Icf>();

    @ViewChild('descrizioneDiv') descrizioneDiv!: ElementRef<HTMLDivElement>;

    icfValue: string = "";
    descrizione: string = "";
    icfsCod: string[] = [];

    ngOnInit() {
        this.icfService.GetICFs()?.subscribe({
            next: (data) => {
                this.icfsCod = data.map((icf: any) => icf.Codice);
            },
            error: (err) => this.checkError.checkError(err)
        })
    }

    SetICF() {
        const regex = /^(?:[A-Z]\d{2}(?:.\d{1,4})?|[bsdeBSDE]\d{1,5}(?:.\d{1,4})?|\d{3}(?:.\d{1,2})?)$/i;

        if (regex.test(this.icfValue)) {
            document.querySelector(".modal-footer .btn-primary")!.classList.remove("disabled");
        } else {
            document.querySelector(".modal-footer .btn-primary")!.classList.add("disabled");
        }

        if (this.icfsCod.includes(this.icfValue) || !regex.test(this.icfValue)) {
            this.descrizioneDiv.nativeElement.classList.add("d-none");
            this.descrizione = "";
        }
        else if (regex.test(this.icfValue) && !this.icfsCod.some((codice: string) => codice.toLowerCase().includes(this.icfValue.toLowerCase()))) {
            this.descrizioneDiv.nativeElement.classList.remove("d-none");
        }
    }

    SaveICF() {
        if(this.icfsCod.includes(this.icfValue)) {
            this.icfEvent.emit(new Icf(this.icfValue, document.getElementById(this.icfValue)!.textContent));
        }
        else {
            this.icfEvent.emit(new Icf(this.icfValue, this.descrizione));
        }
        this.descrizione = "";
        this.icfValue = "";
        this.descrizioneDiv.nativeElement.classList.add("d-none");
    }
}
