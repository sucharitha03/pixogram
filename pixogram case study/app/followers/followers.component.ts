import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  constructor() { }
follow():void{
alert("You are following abc")
}
unfollow():void{
  alert("You  stopped following abc")
  }
  
ngOnInit() {
  }

}