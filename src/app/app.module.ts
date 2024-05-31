import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../app/pages/home/home.component';
import { Whoweare1Component } from '../app/pages/whoweare1/whoweare1.component';
import { Whoweare2Component } from '../app/pages/whoweare2/whoweare2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Whoweare1Component,
    Whoweare2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
