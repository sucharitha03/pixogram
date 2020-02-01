import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth : AuthenticateService) { }

  ngOnInit() {
  }

}
