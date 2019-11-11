import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private notifierService: NotifierService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('token') != null) {
            return true;
        } else {
            this.notifierService.notify('warning', 'You must be logged in to use this service.');
            this.router.navigate(['/login']);
            return false;
        }
    }
}

