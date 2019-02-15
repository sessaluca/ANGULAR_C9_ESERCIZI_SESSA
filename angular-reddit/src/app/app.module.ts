import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, NgbModule, NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
