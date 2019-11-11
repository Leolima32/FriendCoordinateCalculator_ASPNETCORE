import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AddFriendModel } from './add-friend-model';
import { NotifierService } from 'angular-notifier';
import { AddFriendService } from './add-friend.service';
import { catchError } from 'rxjs/operators';
import { NotifyEventModel } from '../../shared/notify-event.model';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {

  public model: AddFriendModel = new AddFriendModel('', 0, 0);

  @Output() notifyEvent = new EventEmitter<NotifyEventModel>();

  constructor(private notifierService: NotifierService, private service: AddFriendService) { }

  ngOnInit() {
  }

  sendForm() {
    this.service.addFriend(this.model).subscribe(
      data => { this.notifierService.notify('success', 'Friend created!'); },
      err => { 
        this.notifierService.notify('error', err.error.message); 
      }
    );
  }

}
