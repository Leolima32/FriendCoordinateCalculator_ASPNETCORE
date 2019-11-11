import { Component, OnInit, Output } from '@angular/core';
import { RegisterModel } from './register.model';
import { RegisterService } from './register.service';
import { NotifierService } from 'angular-notifier';
import { EventEmitter } from '@angular/core';
import { EventModel } from '../shared/event.model';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public model = new RegisterModel();

  @Output() registerEvent = new EventEmitter();

  constructor(
    private notify: NotifierService,
    private service: RegisterService) {
    this.model.username = '';
    this.model.password = '';
  }

  ngOnInit() {
  }

  sendForm() {
    this.service.RegisterUser(this.model).subscribe(
      data => this.registerEvent.emit(new EventModel('success', 'User registerd with sucess!')),
      err => {
        console.log(JSON.stringify(err));
        err.error.value.forEach(error => {
          this.notify.notify('error', error.description);
        });
      }
    );
  }

}
