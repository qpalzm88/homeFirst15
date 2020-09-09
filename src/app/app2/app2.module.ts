import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App2Component } from './app2/app2.component';
import { App3Module } from './app3/app3.module';



@NgModule({
  declarations: [App2Component],
  imports: [
    CommonModule,
    App3Module
  ],
  exports: [App2Component],
})
export class App2Module { }
