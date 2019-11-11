import { Component, OnInit, Input } from '@angular/core';
import { Friend } from '../friends.models';

@Component({
  selector: 'app-current-friend',
  templateUrl: './current-friend.component.html',
  styleUrls: ['./current-friend.component.css']
})
export class CurrentFriendComponent implements OnInit {

  @Input() current: Friend
  @Input() closestFriends: Friend[]

  constructor() { }

  ngOnInit() {
  }

}
