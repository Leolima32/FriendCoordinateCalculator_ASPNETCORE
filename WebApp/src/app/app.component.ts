import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WebApp';

  constructor(private notifierService: NotifierService) {

  }

  ngOnInit() {
    // this.notifierService.notify('success', 'User registerd with sucess!');
  }

  reciveNotification(respostaFilho) {
    console.log('Foi emitido o evento e chegou no pai >>>> ', respostaFilho);
  }
}
