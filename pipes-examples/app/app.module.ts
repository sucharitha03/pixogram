import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './test-pipes/pipe/pipe.component';
import { CustompipePipe } from './test-pipes/custompipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    CustompipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
