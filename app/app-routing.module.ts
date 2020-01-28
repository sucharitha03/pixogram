import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UploadComponent } from './upload/upload.component';
import { SearchresultComponent } from './searchresult/searchresult.component';


const routes: Routes = [
  {path:"",redirectTo :"Home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"upload",component:UploadComponent},
  {path:"search/:searchText",component:SearchresultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
