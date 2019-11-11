import { Routes } from '@angular/router';
import { FriendsComponent } from './friends/friends.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const ROUTES: Routes = [
    { path: '', component: FriendsComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
];
