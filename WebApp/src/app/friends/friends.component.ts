import { Component, OnInit } from '@angular/core';
import { FriendsService } from './friends.service';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { Friend, Coordianate } from './friends.models';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friendsList: Friend[];
  closestFriends: Friend[];
  current: Friend;
  constructor(private friendsService: FriendsService, private notifierService: NotifierService, private router: Router) { }

  ngOnInit() {
    this.friendsService.getAllFriends().subscribe(
      data => {
        this.friendsList = data;
      },
      err => {
        if (err.status === 401) {
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
        }
        this.notifierService.notify('error', err.message);
      }
    );
  }

  visitFriend(friend: Friend) {
    this.friendsService.getClosestFriends(friend._id).subscribe(
      data => { 
        this.closestFriends = data;
        this.current = friend;
      },
      err => {
        this.notifierService.notify('error', err.message);
      }
    )
  }

}
