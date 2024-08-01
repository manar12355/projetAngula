import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormateurRoutingModule } from './formateur-routing.module';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [AddComponent, UpdateComponent, DeleteComponent],
  imports: [
    CommonModule,
    FormateurRoutingModule,
    ClarityModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
})
export class FormateurModule {}
