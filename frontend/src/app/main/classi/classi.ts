import { Component, Directive, inject, PLATFORM_ID } from '@angular/core';
import { StudentiService } from '../../shared/services/studenti.service';
import { ActivatedRoute } from '@angular/router';
import { isPlatformBrowser, CommonModule } from "@angular/common";
import { ClassiCard } from './classi-card/classi-card';
import { ColorSection } from '../../shared/directives/color-section';
import { CheckError } from '../../shared/utilities/check-error';

@Component({
    selector: 'app-classi',
    imports: [ClassiCard, CommonModule],
    providers: [ColorSection],
    templateUrl: './classi.html',
    styleUrl: './classi.css',
})
export class Classi {
    public readonly studentiService: StudentiService = inject(StudentiService);
    private readonly activatedRouter: ActivatedRoute = inject(ActivatedRoute);
    private readonly colorSectionDirective: ColorSection = inject(ColorSection);
    private readonly checkError: CheckError = inject(CheckError);

    public mainColor: any = {};
    public iconClass: string = "";
    public sectionIndirizzo: string = "";

    private platformId = inject(PLATFORM_ID);

    private filterClassi: any = {};
    private filterAnnoScolastico: any = {};

    anni: any = [
        { label: 'Primo anno', id: 1 },
        { label: 'Secondo anno', id: 2 },
        { label: 'Terzo anno', id: 3 },
        { label: 'Quarto anno', id: 4 },
        { label: 'Quinto anno', id: 5 }
    ];

    ngOnInit() {
        this.studentiService.indirizzoSelected = this.activatedRouter.snapshot.paramMap.get("indirizzo")!;

        this.studentiService.GetAnniScolastici().subscribe({
            next: (data: any) => {
                // Eseguiamo SOLO se siamo nel browser
                if (isPlatformBrowser(this.platformId)) {
                    this.colorSectionDirective.GetColorSection(this.studentiService.indirizzoSelected!);
                    this.iconClass = this.colorSectionDirective.GetIconSection(this.studentiService.indirizzoSelected!);
                    document.querySelector(".dropdown-toggle")!.textContent = this.studentiService.anniScolastici[0].getFullYear().toString() + "/" + (this.studentiService.anniScolastici[0].getFullYear() + 1).toString();
                }
            },
            error: (err: any) => this.checkError.checkError(err)
        });

        this.filterAnnoScolastico = this.studentiService.anniScolastici[0];
        this.studentiService.GetClassi({}, this.filterAnnoScolastico).subscribe({
            next: (data: any) => {
                this.studentiService.GetNumeroClassi();
            },
            error: (err: any) => this.checkError.checkError(err)
        });
    }

    SetFilterAnno(anno: number) {
        if (anno == 0) {
            this.resetFiltersAnno();
        }
        else {
            this.filterClassi["in"] = this.filterClassi["in"] || [];

            if (this.filterClassi["in"].includes(anno)) {
                this.filterClassi["in"].splice(this.filterClassi["in"].indexOf(anno), 1);
                document.getElementById("anno-" + anno)?.classList.remove("active");
            }
            else {
                this.filterClassi["in"].push(anno);
                document.getElementById("anno-all")?.classList.remove("active");
                document.getElementById("anno-" + anno)?.classList.add("active");
            }

            if (this.filterClassi["in"].length == document.querySelectorAll(".anno-tab").length - 1 || this.filterClassi["in"].length == 0) {
                this.resetFiltersAnno();
            }
        }

        this.studentiService.GetClassi(this.filterClassi, this.filterAnnoScolastico).subscribe({
            next: (data: any) => {
                this.studentiService.GetNumeroClassi();
            },
            error: (err: any) => this.checkError.checkError(err)
        });
    }

    resetFiltersAnno() {
        if (!isPlatformBrowser(this.platformId)) return;

        this.filterClassi = {};
        document.getElementById("anno-all")?.classList.add("active");
        for (let i = 1; i <= document.querySelectorAll(".anno-tab").length; i++)
            document.getElementById("anno-" + i)?.classList.remove("active");
    }

    SetFilterAnnoScolastico(annoScolastico: Date) {
        console.log(annoScolastico);
        document.querySelector(".dropdown-toggle")!.textContent = annoScolastico.getFullYear().toString() + "/" + (annoScolastico.getFullYear() + 1).toString();
        this.filterAnnoScolastico = annoScolastico;
        this.studentiService.GetClassi(this.filterClassi, this.filterAnnoScolastico).subscribe({
            next: (data: any) => {
                this.studentiService.GetNumeroClassi();
            },
            error: (err: any) => this.checkError.checkError(err)
        });
    }
}
