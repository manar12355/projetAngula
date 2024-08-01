import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { DelUserComponent } from './del-user/del-user.component';
import { AddComponent } from './add/add.component';
const routes: Routes = [
  { path: 'userList', component: ListUserComponent },
  { path: 'userDelete', component: DelUserComponent },
  { path: 'userAdd', component: AddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
