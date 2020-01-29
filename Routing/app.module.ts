import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { MenuComponent } from './menu/menu.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductBaseComponent } from './product-base/product-base.component';
import { ProductEntryComponent } from './product-entry/product-entry.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    UploadComponent,
    MenuComponent,
    SearchresultComponent,
    LoginComponent,
    LogoutComponent,
    ProductBaseComponent,
    ProductEntryComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
