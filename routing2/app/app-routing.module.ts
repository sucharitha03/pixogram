import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UploadComponent } from './upload/upload.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ErrorComponent } from './error/error.component';



const routes: Routes =  [
  { path:"", redirectTo : "home", pathMatch: "full"},
{ path:"home", component: HomeComponent},
{ path:"contact", component: ContactComponent},
{ path:"upload", component: UploadComponent},
{ path:"login", component: LoginComponent},

// connect the guard service
{ path:"product", component: ProductListComponent, canActivate : [AuthGuardService]},
{ path:"product-add", component: ProductAddComponent, canActivate : [AuthGuardService]},
{ path:"logout", component: LogoutComponent, canActivate : [AuthGuardService]},
// <url>/:<name by which data is accessed>
{ path:"search/:searchText", component: SearchresultComponent},

// add a fallback mapping
{ path:"**", component: ErrorComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
