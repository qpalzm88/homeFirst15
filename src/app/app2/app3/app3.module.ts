import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App31Component } from './app31/app31.component';
import { App4Module } from './app4/app4.module';
import { App3Component } from './app3.component';



@NgModule({
  declarations: [App31Component, App3Component],
  imports: [
    CommonModule,
    App4Module
  ],
  exports: [App3Component],
})
export class App3Module { }
