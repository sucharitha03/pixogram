import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UploadComponent } from './upload/upload.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductBaseComponent } from './product-base/product-base.component';


const routes: Routes = [
  {path:"",redirectTo :"Home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"upload",component:UploadComponent},
  {path:"search/:searchText",component:SearchresultComponent},
  {path:"login",component:LoginComponent},
  {path:"logout",component:LogoutComponent},
  {path:"product",component:ProductBaseComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
