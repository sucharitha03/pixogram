import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  errorMessage : string;
  authorized : boolean;


  // recieve Router service in constructor
  constructor(public auth : AuthenticateService, public router : Router) { 
      this.errorMessage = "Invalid Credentials!!!";
      this.authorized = true;
  }

  // method to check Login credentials
  checkLogin(txtLogin : HTMLInputElement, txtPass : HTMLInputElement){
    // need a service to authenticate
    if(this.auth.authenticate(txtLogin.value, txtPass.value)){
        // if user authorized navigate to product component
        this.authorized = true;
        this.router.navigate(['/mymedia']);
    }else{
        this.authorized = false;
    }
  }

  ngOnInit() {
  }

}