import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appIndirizziStyle]',
    standalone: true,
    exportAs: 'indirizziStyle'
})
export class IndirizziStyle {
    @Input('appIndirizziStyle') indirizzo!: string;

    private readonly config: any = {
        'INF': { main: '--inf-color', hover: '--inf-color-hover' },
        'ELT': { main: '--elt-color', hover: '--elt-color-hover' },
        'MEC': { main: '--mec-color', hover: '--mec-color-hover' },
        'AFM': { main: '--afm-color', hover: '--afm-color-hover' },
        'LIC': { main: '--lic-color', hover: '--lic-color-hover' },
        'TUR': { main: '--tur-color', hover: '--tur-color-hover' },
        'ENE': { main: '--ene-color', hover: '--ene-color-hover' }
    };

    // applica immediatamente alla variabile --color il risultato del metodo color() 
    @HostBinding('style.--color') get color() {
        const c = this.config[this.indirizzo];
        return c ? `var(${c.main})` : '#555';
    }

    // applica immediatamente alla variabile --color-hover il risultato del metodo hover()
    @HostBinding('style.--color-hover') get hover() {
        const c = this.config[this.indirizzo];
        return c ? `var(${c.hover})` : 'rgba(0,0,0,0.05)';
    }

    // applica immediatamente alla variabile --color-hover-dark il risultato del metodo dark()
    @HostBinding('style.--color-hover-dark') get dark() {
        const c = this.config[this.indirizzo];
        return c ? `var(${c.dark})` : 'rgba(0,0,0,0.1)';
    }

    GetIcon(indirizzo: string): string {
        const icons: any = {
            'INF': "bi-pc-display-horizontal",
            'ELT': "bi-lightning-charge-fill",
            'MEC': "bi-gear-fill",
            'AFM': "bi-cash-coin",
            'LIC': "bi-book-fill",
            'TUR': "bi-airplane-fill",
            'ENE': "bi-battery-charging"
        };
        return icons[indirizzo] || "bi-mortarboard-fill";
    }

    GetDescrizione(indirizzo: string): string {
        const nomi: any = {
            'INF': 'Informatica e Telecomunicazioni',
            'ELT': 'Elettronica ed Elettrotecnica',
            'MEC': 'Meccanica, Meccatronica ed Energia',
            'AFM': 'Amministrazione, Finanza e Marketing',
            'LIC': 'Liceo Scientifico Scienze Applicate',
            'TUR': 'Turismo', 'ENE': 'Energia'
        };
        return nomi[indirizzo] || 'Indirizzo Scolastico';
    }
}
