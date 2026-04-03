import { Component, inject, PLATFORM_ID } from '@angular/core';
import { StudentiService } from '../../shared/services/studenti.service';
import { ActivatedRoute } from '@angular/router';
import { NgStyle, NgClass, isPlatformBrowser } from "@angular/common";
import { ClassiCard } from './classi-card/classi-card';

@Component({
    selector: 'app-classi',
    imports: [ClassiCard, NgClass],
    templateUrl: './classi.html',
    styleUrl: './classi.css',
})
export class Classi {
    public readonly studentiService: StudentiService = inject(StudentiService);
    private readonly activatedRouter: ActivatedRoute = inject(ActivatedRoute);

    public mainColor: any = {};
    public iconClass: string = "";
    public sectionIndirizzo: string = "";

    private platformId = inject(PLATFORM_ID);

    private filterClassi: any = {};
    private filterAnnoScolastico: any = {};

    async ngOnInit() {
        this.studentiService.indirizzoSelected = this.activatedRouter.snapshot.paramMap.get("indirizzo")!;

        await this.studentiService.GetAnniScolastici();

        this.filterAnnoScolastico = this.studentiService.anniScolastici[0];
        this.studentiService.GetClassi({}, this.filterAnnoScolastico);

        // Eseguiamo SOLO se siamo nel browser
        if (isPlatformBrowser(this.platformId)) {
            this.SetColorsSectionIndirizzo(this.studentiService.indirizzoSelected);
            this.SetIconSectionIndirizzo(this.studentiService.indirizzoSelected);
            // console.log(this.studentiService.anniScolastici);
            document.querySelector(".dropdown-toggle")!.textContent = this.studentiService.anniScolastici[0].getFullYear().toString() + "/" + (this.studentiService.anniScolastici[0].getFullYear() + 1).toString();
        }
    }

    SetColorsSectionIndirizzo(indirizzo: string) {
        switch (indirizzo) {
            case 'INF':
                document.documentElement.style.setProperty('--color', 'var(--inf-color)');
                document.documentElement.style.setProperty('--color-hover', 'var(--inf-color-hover)');
                document.documentElement.style.setProperty('--color-hover-dark', 'var(--inf-color-hover-dark)');
                break;
            case 'ELT':
                document.documentElement.style.setProperty('--color', 'var(--elt-color)');
                document.documentElement.style.setProperty('--color-hover', 'var(--elt-color-hover)');
                document.documentElement.style.setProperty('--color-hover-dark', 'var(--elt-color-hover-dark)');
                break;
            case 'MEC':
                document.documentElement.style.setProperty('--color', 'var(--mec-color)');
                document.documentElement.style.setProperty('--color-hover', 'var(--mec-color-hover)');
                document.documentElement.style.setProperty('--color-hover-dark', 'var(--mec-color-hover-dark)');
                break;
            case 'AFM':
                document.documentElement.style.setProperty('--color', 'var(--afm-color)');
                document.documentElement.style.setProperty('--color-hover', 'var(--afm-color-hover)');
                document.documentElement.style.setProperty('--color-hover-dark', 'var(--afm-color-hover-dark)');
                break;
            case 'LIC':
                document.documentElement.style.setProperty('--color', 'var(--lic-color)');
                document.documentElement.style.setProperty('--color-hover', 'var(--lic-color-hover)');
                document.documentElement.style.setProperty('--color-hover-dark', 'var(--lic-color-hover-dark)');
                break;
            case 'TUR':
                document.documentElement.style.setProperty('--color', 'var(--tur-color)');
                document.documentElement.style.setProperty('--color-hover', 'var(--tur-color-hover)');
                document.documentElement.style.setProperty('--color-hover-dark', 'var(--tur-color-hover-dark)');
                break;
            case 'ENE':
                document.documentElement.style.setProperty('--color', 'var(--ene-color)');
                document.documentElement.style.setProperty('--color-hover', 'var(--ene-color-hover)');
                document.documentElement.style.setProperty('--color-hover-dark', 'var(--ene-color-hover-dark)');
                break;
        }
    }

    SetIconSectionIndirizzo(indirizzo: string) {
        switch (indirizzo) {
            case 'INF':
                this.iconClass = "bi-pc-display-horizontal";
                break;
            case 'ELT':
                this.iconClass = "bi-lightning-charge-fill";
                break;
            case 'MEC':
                this.iconClass = "bi-gear-fill";
                break;
            case 'AFM':
                this.iconClass = "bi-cash-coin";
                break;
            case 'LIC':
                this.iconClass = "bi-book-fill";
                break;
            case 'TUR':
                this.iconClass = "bi-airplane-fill";
                break;
            case 'ENE':
                this.iconClass = "bi-battery-charging";
                break;
        }
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

        this.studentiService.GetClassi(this.filterClassi, this.filterAnnoScolastico);
    }

    resetFiltersAnno() {
        this.filterClassi = {};
        document.getElementById("anno-all")?.classList.add("active");
        for (let i = 1; i <= document.querySelectorAll(".anno-tab").length; i++)
            document.getElementById("anno-" + i)?.classList.remove("active");
    }

    SetFilterAnnoScolastico(annoScolastico: Date) {
        document.querySelector(".dropdown-toggle")!.textContent = annoScolastico.getFullYear().toString() + "/" + (annoScolastico.getFullYear() + 1).toString();
        this.filterAnnoScolastico = annoScolastico;
        this.studentiService.GetClassi(this.filterClassi, this.filterAnnoScolastico);
    }
}
