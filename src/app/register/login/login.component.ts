import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form = {
    type: '',
    username: '',
    password: '',
    rememberMe: false,
  };
}
