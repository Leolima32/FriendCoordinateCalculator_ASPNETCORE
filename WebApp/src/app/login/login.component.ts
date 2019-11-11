import { Component, OnInit, Output } from '@angular/core';
import { UserModel } from '../shared/user.model';
import { LoginService } from './login.service';
import { NotifierService } from 'angular-notifier';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public model = new UserModel();

  constructor(
    private notify: NotifierService,
    private service: LoginService,
    private router: Router) {
    this.model.username = '';
    this.model.password = '';
  }

  ngOnInit() {
  }

  sendForm() {
    this.service.login(this.model).subscribe(
      data => {
        localStorage.setItem('token', data.token);
        this.service.username = data.username;
        this.notify.notify('success', 'user successfully logged in');
        this.router.navigate(['/']);
      },
      err => {
        err.error.value.forEach(error => {
          this.notify.notify('error', error.description);
        });
      }
    );
  }

}
