import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { LoginComponent } from './login/login.component';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    RouterModule,
    ClarityModule,
    FormsModule,
  ],
})
export class RegisterModule {}
