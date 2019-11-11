import { Component, OnInit, Output } from '@angular/core';
import { UserModel } from '../shared/user.model';
import { RegisterService } from './register.service';
import { NotifierService } from 'angular-notifier';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public model = new UserModel();

  constructor(
    private notify: NotifierService,
    private service: RegisterService,
    private router: Router) {
    this.model.username = '';
    this.model.password = '';
  }

  ngOnInit() {
  }

  sendForm() {
    this.service.RegisterUser(this.model).subscribe(
      data => {
        this.notify.notify('success', 'User registerd with sucess!');
        this.router.navigate(['/login']);
      },
      err => {
        err.error.value.forEach(error => {
          this.notify.notify('error', error.description);
        });
      }
    );
  }

}
