import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RbbRoutingModule } from './rbb-routing.module';
import { RbbComponent } from './rbb.component';


@NgModule({
  declarations: [
    RbbComponent
  ],
  imports: [
    CommonModule,
    RbbRoutingModule
  ]
})
export class RbbModule { }
