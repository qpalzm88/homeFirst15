import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App41Component } from './app41/app41.component';
import { App42Component } from './app42/app42.component';
import { App5Component } from './app5/app5.component';
import { App51Component } from './app5/app51/app51.component';
import { App52Component } from './app5/app52/app52.component';
import { App53Component } from './app5/app53/app53.component';
import { App54Component } from './app5/app54/app54.component';
import { App4Component } from './app4.component';



@NgModule({
  declarations: [App41Component, App42Component, App5Component, App51Component, App52Component, App53Component, App54Component, App4Component],
  imports: [
    CommonModule
  ],
  exports: [App41Component, App42Component, App4Component],
})
export class App4Module { }
