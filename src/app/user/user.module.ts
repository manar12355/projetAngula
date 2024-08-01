import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelUserComponent } from './del-user/del-user.component';
import { ClarityModule } from '@clr/angular';
import { UserRoutingModule } from './user-routing.module';
import { AddComponent } from './add/add.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DelUserComponent, AddComponent],
  imports: [
    CommonModule,
    ClarityModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [DelUserComponent],
})
export class UserModule {}
