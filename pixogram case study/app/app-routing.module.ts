import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Authentication/login/login.component';
import { HeaderComponent } from './headers/header/header.component';
import { UserheaderComponent } from './headers/userheader/userheader.component';
import { RegistrationComponent } from './Authentication/registration/registration.component';
import { MediaAddComponent } from './media/media-add/media-add.component';
import { MediaListComponent } from './media/media-list/media-list.component';
import { MediadetailsComponent } from './mediadetails/mediadetails.component';
import { UploadmediaComponent } from './uploadmedia/uploadmedia.component';
import { MymediaComponent } from './mymedia/mymedia.component';
import { FollowersComponent } from './followers/followers.component';
import { AccountComponent } from './account/account.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './services/auth-guard.service';



const routes: Routes = [

 {path:"login",component:LoginComponent},
 {path:"header",component:HeaderComponent},
 {path:"userheader",component:UserheaderComponent},
 {path:"registration",component:RegistrationComponent},
 {path:"mediaadd",component:MediaAddComponent},
 {path:"medialist",component:MediaListComponent},
 {path:"mediadetails",component:MediadetailsComponent},
 {path:"uploadmedia",component:UploadmediaComponent,canActivate : [AuthGuardService]},
 {path:"mymedia",component:MymediaComponent,canActivate : [AuthGuardService]},
 {path:"followers",component:FollowersComponent,canActivate : [AuthGuardService]},
 {path:"account",component:AccountComponent},
 {path:"logout",component:LogoutComponent,canActivate : [AuthGuardService]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
