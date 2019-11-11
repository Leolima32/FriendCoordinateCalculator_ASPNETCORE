import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotifierModule } from 'angular-notifier';
import { RegisterService } from './register/register.service';
import { FriendsService } from './friends/friends.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right',
        },
        vertical: {
          position: 'top',
          distance: 12
        }
      }
    })
  ],
  providers: [RegisterService, FriendsService],
  bootstrap: [AppComponent]
})
export class AppModule { }