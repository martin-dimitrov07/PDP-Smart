import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'app-login-card',
    imports: [],
    templateUrl: './login-card.html',
    styleUrl: './login-card.css',
})
export class LoginCard {
    @Input() IconClass!: string;
    @Input() Title!: string;
    @Input() Description!: string;

    // Questo aggiunge automaticamente le classi al tag <app-login-card>
    @HostBinding('class') classes = 'col-6 p-2';
}
