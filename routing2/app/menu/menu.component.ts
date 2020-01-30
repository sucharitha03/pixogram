import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication-service.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public auth : AuthenticationService) { }

  ngOnInit() {
  }

}
