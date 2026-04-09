import { Component, inject } from '@angular/core';
import { StudentiService } from '../../shared/services/studenti.service';
import { ActivatedRoute } from '@angular/router';
import { ColorSection } from '../../shared/directives/color-section';
import { CommonModule } from '@angular/common';
import { CheckError } from '../../shared/utilities/check-error';
import { StudentiCard } from './studenti-card/studenti-card';
import { error, time } from 'console';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-studenti',
    imports: [CommonModule, StudentiCard, FormsModule],
    providers: [ColorSection],
    templateUrl: './studenti.html',
    styleUrl: './studenti.css',
})
export class Studenti {
    public readonly studentiService: StudentiService = inject(StudentiService);
    private readonly checkError: CheckError = inject(CheckError);
    private readonly activatedRouter: ActivatedRoute = inject(ActivatedRoute);
    private readonly colorSectionDirective: ColorSection = inject(ColorSection);

    nStudenti: number = 0;
    classeId: number = 0;
    indirizzo: string = "";

    iconClass: string = "";

    searchTerm: string = "";
    orderValue: string = "Nome";
    DSA_BES: any = -1;
    timer: any;

    ngOnInit() {
        this.indirizzo = String(this.activatedRouter.snapshot.paramMap.get("indirizzo"));
        this.classeId = Number(this.activatedRouter.snapshot.paramMap.get("idClasse"));
        this.colorSectionDirective.GetColorSection(this.indirizzo);
        this.iconClass = this.colorSectionDirective.GetIconSection(this.indirizzo);

        this.studentiService.GetClasseById(this.classeId).subscribe({
            next: () => { },
            error: (err: any) => this.checkError.checkError(err)
        });

        this.studentiService.GetNumeroStudenti(this.classeId).subscribe({
            next: (data) => { this.nStudenti = data.countStudenti; },
            error: (err: any) => this.checkError.checkError(err)
        });

        this.studentiService.GetStudenti(this.classeId).subscribe({
            next: () => { },
            error: (err: any) => this.checkError.checkError(err)
        });
    }

    Search() {
        clearTimeout(this.timer);

        this.timer = setTimeout(() => {
            this.studentiService.GetStudenti(this.classeId, this.searchTerm, this.DSA_BES, this.orderValue).subscribe({
                next: () => { },
                error: (err: any) => {
                    if (err.status == 404)
                        this.studentiService.studenti = [];

                    this.checkError.checkError(err)
                }
            });
        }, 500)
    }

    SetFilterDSA_BES(filter: any) {
        this.DSA_BES = filter;

        console.log(this.DSA_BES);
        if (filter == -1) {
            document.getElementById("badges-dsa")?.classList.remove("active");
            document.getElementById("badges-bes")?.classList.remove("active");
            document.getElementById("badges-all")?.classList.add("active");
        }
        else if (this.DSA_BES == true) {
            document.getElementById("badges-dsa")?.classList.add("active");
            document.getElementById("badges-bes")?.classList.remove("active");
            document.getElementById("badges-all")?.classList.remove("active");
        }
        else {
            document.getElementById("badges-dsa")?.classList.remove("active");
            document.getElementById("badges-bes")?.classList.add("active");
            document.getElementById("badges-all")?.classList.remove("active");
        }

        this.studentiService.GetStudenti(this.classeId, this.searchTerm, this.DSA_BES, this.orderValue).subscribe({
            next: () => {},
            error: (err: any) => this.checkError.checkError(err)
        });
    }
}
