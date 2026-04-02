import { Component, inject, PLATFORM_ID } from '@angular/core';
import { StudentiService } from '../../shared/services/studenti.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgStyle, NgClass, isPlatformBrowser } from "@angular/common";
import { ClassiCard } from './classi-card/classi-card';

@Component({
    selector: 'app-classi',
    imports: [NgStyle, NgClass, ClassiCard],
    templateUrl: './classi.html',
    styleUrl: './classi.css',
})
export class Classi {
    public readonly studentiService: StudentiService = inject(StudentiService);
    private readonly activatedRouter: ActivatedRoute = inject(ActivatedRoute);
    private readonly router: Router = inject(Router);

    public mainColor: any = {};
    public sectionIndirizzo: string = "";

    private platformId = inject(PLATFORM_ID);

    ngOnInit() {
        this.studentiService.indirizzoSelected = this.activatedRouter.snapshot.paramMap.get("indirizzo")!;

        this.studentiService.GetClassi().subscribe({
            next: data => {
                console.log(data);
            },
            error: err => {
                if (err.status == 401) {
                    console.error(err);
                    this.router.navigate(["login"]);
                }
                else
                    console.error(err.status + ": " + err.error);
            }
        })

        // Eseguiamo il cambio colore SOLO se siamo nel browser
        if (isPlatformBrowser(this.platformId))
            this.SetColorsSectionIndirizzo(this.studentiService.indirizzoSelected);
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
}
