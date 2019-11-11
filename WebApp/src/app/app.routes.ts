import { Routes } from '@angular/router';
import { FriendsComponent } from './friends/friends.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';

export const ROUTES: Routes = [
    { path: '', component: FriendsComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
];
