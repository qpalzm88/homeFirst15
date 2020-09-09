import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {App2Module} from './app2/app2.module';
import { App3Module } from './app2/app3/app3.module';
import { App4Module } from './app2/app3/app4/app4.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    App2Module,
    App3Module,
    App4Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
