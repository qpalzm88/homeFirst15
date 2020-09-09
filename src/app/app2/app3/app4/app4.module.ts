import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App41Component } from './app41/app41.component';
import { App42Component } from './app42/app42.component';
import { App43Component } from './app43/app43.component';



@NgModule({
  declarations: [App41Component, App42Component, App43Component],
  imports: [
    CommonModule
  ],
  exports: [App41Component, App42Component, App43Component],
})
export class App4Module { }
