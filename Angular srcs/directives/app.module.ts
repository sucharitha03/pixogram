import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectiveExComponent } from './directive-ex/directive-ex.component';
import { CalciComponent } from './calci/calci.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveExComponent,
    CalciComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
