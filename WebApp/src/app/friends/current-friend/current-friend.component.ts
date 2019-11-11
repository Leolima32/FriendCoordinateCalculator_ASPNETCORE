import { Component, OnInit, Input } from '@angular/core';
import { Friend, Coordianate } from '../friends.models';

@Component({
  selector: 'app-current-friend',
  templateUrl: './current-friend.component.html',
  styleUrls: ['./current-friend.component.css']
})
export class CurrentFriendComponent implements OnInit {

  @Input() current = new Friend('', '', new Coordianate(0, 0), 0);
  @Input() closestFriends: Friend[]

  constructor() { }

  ngOnInit() {
  }

}
