import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IvbRoutingModule } from './ivb-routing.module';
import { IvbComponent } from './ivb.component';


@NgModule({
  declarations: [
    IvbComponent
  ],
  imports: [
    CommonModule,
    IvbRoutingModule
  ]
})
export class IvbModule { }
