import { Component } from '@angular/core';
import { LoginCard } from './login-card/login-card';
import { LoginForm } from './login-form/login-form';

@Component({
  selector: 'app-login',
  imports: [LoginCard, LoginForm],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}
