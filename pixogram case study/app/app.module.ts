import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Authentication/login/login.component';//import { ProductListComponent } from './product/product-list/product-list.component';
import { RegistrationComponent } from './Authentication/registration/registration.component';
import { MediadetailsComponent } from './mediadetails/mediadetails.component';
import { UploadsinglemediaComponent } from './uploadsinglemedia/uploadsinglemedia.component';
import { FollowersComponent } from './followers/followers.component';
import { HeaderComponent } from './headers/header/header.component';
import { UserheaderComponent } from './headers/userheader/userheader.component';
import { MediaAddComponent } from './media/media-add/media-add.component';
import { MediaListComponent } from './media/media-list/media-list.component';
import { UploadmediaComponent } from './uploadmedia/uploadmedia.component';
import { MymediaComponent } from './mymedia/mymedia.component';
import { AccountComponent } from './account/account.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
  
    MediadetailsComponent,
    UploadsinglemediaComponent,
    FollowersComponent,
    HeaderComponent,
    UserheaderComponent,
    MediaAddComponent,
    MediaListComponent,
    UploadmediaComponent,
    MymediaComponent,
    AccountComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
