import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App31Component } from './app31/app31.component';
import { App32Component } from './app32/app32.component';
import { App4Module } from './app4/app4.module';



@NgModule({
  declarations: [App31Component, App32Component],
  imports: [
    CommonModule,
    App4Module
  ],
  exports: [App31Component, App32Component],
})
export class App3Module { }
