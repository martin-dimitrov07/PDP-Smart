import { Directive, DOCUMENT, inject } from '@angular/core';

@Directive({
    selector: '[appColorSection]'
})
export class ColorSection {

    private document: Document = inject(DOCUMENT);

    GetColorSection(indirizzo: string) {
        const colors: any = {
            'INF': { main: '--inf-color', hover: '--inf-color-hover', dark: '--inf-color-hover-dark' },
            'ELT': { main: '--elt-color', hover: '--elt-color-hover', dark: '--elt-color-hover-dark' },
            'MEC': { main: '--mec-color', hover: '--mec-color-hover', dark: '--mec-color-hover-dark' },
            'AFM': { main: '--afm-color', hover: '--afm-color-hover', dark: '--afm-color-hover-dark' },
            'LIC': { main: '--lic-color', hover: '--lic-color-hover', dark: '--lic-color-hover-dark' },
            'TUR': { main: '--tur-color', hover: '--tur-color-hover', dark: '--tur-color-hover-dark' },
            'ENE': { main: '--ene-color', hover: '--ene-color-hover', dark: '--ene-color-hover-dark' }
        };

        const config = colors[indirizzo];

        if (config) {
            this.document.documentElement.style.setProperty('--color', `var(${config.main})`);
            this.document.documentElement.style.setProperty('--color-hover', `var(${config.hover})`);
            this.document.documentElement.style.setProperty('--color-hover-dark', `var(${config.dark})`);
        }
    }

    GetIconSection(indirizzo: string): string {
        const icons: any = {
            'INF': "bi-pc-display-horizontal",
            'ELT': "bi-lightning-charge-fill",
            'MEC': "bi-gear-fill",
            'AFM': "bi-cash-coin",
            'LIC': "bi-book-fill",
            'TUR': "bi-airplane-fill",
            'ENE': "bi-battery-charging"
        };
        return icons[indirizzo] || "";
    }
}
