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
  current: Friend = new Friend('', '', new Coordianate(0, 0), 0);

  showCurrentFriend = true;
  showCreate = false;
  constructor(private friendsService: FriendsService, private notifierService: NotifierService, private router: Router) { }

  ngOnInit() {
    this.refreshFriendsList();
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

  showCurrentTab() {
    this.showCurrentFriend = true;
    this.showCreate = false;
    document.getElementById('current-tab').classList.add('is-active');
    document.getElementById('create-tab').classList.remove('is-active');
  }

  showCreateTab() {
    this.showCurrentFriend = false;
    this.showCreate = true;
    document.getElementById('current-tab').classList.remove('is-active');
    document.getElementById('create-tab').classList.add('is-active');
  }

  reload($event) {
    this.refreshFriendsList();
  }

  refreshFriendsList() {
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

}
