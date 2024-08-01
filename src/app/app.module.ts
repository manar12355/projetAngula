import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { ListUserComponent } from './user/list-user/list-user.component';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [AppComponent, ListUserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    UserModule,
    HttpClientModule,
    CoreModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
