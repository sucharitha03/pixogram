import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  
  constructor() { }
  authenticate(userid : string, password : string): boolean{
    
    if(userid === "First" && password === "abc"){
    
      
      sessionStorage.setItem("user", userid);
      return true;
    }else{
      return false;
    }
  }

  // to check if user if logged in or not
  isUserLoggedIn(): boolean{
    // check if sessionStorage contains key 'user'
    let user = sessionStorage.getItem('user');
    if(user == null)
      return false;
    return true;  
  }
  logout(){
    // remove the key/value pair of 'user'
    sessionStorage.removeItem('user');
    // sessionStorage.clear();
  }
  getUserDetails():string{
    let user = sessionStorage.getItem('user');
    return user;
  }
}
