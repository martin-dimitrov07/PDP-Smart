import { Component, ViewChild } from '@angular/core';
import { LoginCard } from './login-card/login-card';
import { LoginForm } from './login-form/login-form';

@Component({
  selector: 'app-login',
  imports: [LoginCard, LoginForm],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

    isDark: boolean = false;
    @ViewChild("icon") themeIcon: any;

    ngAfterViewInit(){
        this.themeIcon = document.querySelector(".btn-theme .bi");
    }

    async ChangeTheme(){
        this.isDark = !this.isDark;
        document.body.classList.toggle("dark-mode");

        const icon = this.themeIcon.nativeElement;

        if(this.isDark){
            icon.classList.remove("bi-moon-fill");
            icon.classList.add("bi-sun-fill");
        } else {
            icon.classList.remove("bi-sun-fill");
            icon.classList.add("bi-moon-fill");
        }
    }
}
