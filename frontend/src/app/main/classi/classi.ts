import { Component, Directive, inject, PLATFORM_ID } from '@angular/core';
import { StudentiService } from '../../shared/services/studenti.service';
import { ActivatedRoute } from '@angular/router';
import { isPlatformBrowser, CommonModule } from "@angular/common";
import { ClassiCard } from './classi-card/classi-card';
import { ColorSection } from '../../shared/directives/color-section';
import { CheckError } from '../../shared/utilities/check-error';
import { ClassiFilters } from "./classi-filters/classi-filters";
import { ClassiHeader } from './classi-header/classi-header';
import { ClassiService } from '../../shared/services/classi.service';
import { IndirizziService } from '../../shared/services/indirizzi.service';
import { AnniScolasticiService } from '../../shared/services/anni-scolastici.service';

@Component({
    selector: 'app-classi',
    imports: [ClassiCard, CommonModule, ClassiFilters, ClassiHeader],
    providers: [ColorSection],
    templateUrl: './classi.html',
    styleUrl: './classi.css',
})
export class Classi {
    public readonly studentiService: StudentiService = inject(StudentiService);
    public readonly anniScolasticiService: AnniScolasticiService = inject(AnniScolasticiService);
    public readonly classiService: ClassiService = inject(ClassiService);
    public readonly indirizziService: IndirizziService = inject(IndirizziService);
    private readonly activatedRouter: ActivatedRoute = inject(ActivatedRoute);
    private readonly colorSectionDirective: ColorSection = inject(ColorSection);
    private readonly checkError: CheckError = inject(CheckError);

    isLoading: boolean = false;

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
        this.indirizziService.indirizzoSelected = this.activatedRouter.snapshot.paramMap.get("indirizzo")!;

        this.isLoading = true;

        this.anniScolasticiService.GetAnniScolasticiStudenti().subscribe({
            next: (data: any) => {
                // Eseguiamo SOLO se siamo nel browser
                if (isPlatformBrowser(this.platformId)) {
                    this.colorSectionDirective.GetColorSection(this.indirizziService.indirizzoSelected!);
                    this.iconClass = this.colorSectionDirective.GetIconSection(this.indirizziService.indirizzoSelected!);
                    document.querySelector("#annoDropdown")!.textContent = this.anniScolasticiService.anniScolastici[0].getFullYear().toString() + "/" + (this.anniScolasticiService.anniScolastici[0].getFullYear() + 1).toString();
                }

                this.filterAnnoScolastico = this.anniScolasticiService.anniScolastici[0];
                this.classiService.GetClassi({}, this.filterAnnoScolastico).subscribe({
                    next: (data: any) => {
                        this.classiService.GetNumeroClassi();
                        this.isLoading = false;
                    },
                    error: (err: any) => {
                        this.checkError.checkError(err);
                        this.isLoading = false;
                    }
                });
            },
            error: (err: any) => {
                this.checkError.checkError(err);
                this.isLoading = false;
            }
        });
    }

    get hasNoClasses(): boolean {
        if (!this.anni || !this.classiService.classi) return true;

        const haAlmenoUnaClasse = this.anni.some((anno: any) =>
            this.classiService.classi[anno.id] && this.classiService.classi[anno.id].length > 0
        );

        return !haAlmenoUnaClasse;
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

        this.isLoading = true;

        this.classiService.GetClassi(this.filterClassi, this.filterAnnoScolastico).subscribe({
            next: (data: any) => {
                this.classiService.GetNumeroClassi();
                this.isLoading = false;
            },
            error: (err: any) => {
                this.checkError.checkError(err);
                this.isLoading = false;
            }
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
        document.querySelector("#annoDropdown")!.textContent = annoScolastico.getFullYear().toString() + "/" + (annoScolastico.getFullYear() + 1).toString();
        this.filterAnnoScolastico = annoScolastico;
        this.isLoading = true;
        this.classiService.GetClassi(this.filterClassi, this.filterAnnoScolastico).subscribe({
            next: (data: any) => {
                this.classiService.GetNumeroClassi();
                this.isLoading = false;
            },
            error: (err: any) => {
                this.checkError.checkError(err);
                this.isLoading = false;
            }
        });
    }
}
