import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication-service.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage : string;
  autherized : boolean;

  constructor(public auth : AuthenticationService, public router : Router) { 
    this.errorMessage = "Invalid Credentials!!!";
      this.autherized = true;
  }
  checkLogin(txtLogin : HTMLInputElement, txtPass : HTMLInputElement){
    // need a service to authenticate
    if(this.auth.authenticate(txtLogin.value, txtPass.value)){
        // if user autherized navigate to product component
        this.autherized = true;
        this.router.navigate(['/product']);
    }else{
        this.autherized = false;
    }
  }
  ngOnInit() {
  }

}
