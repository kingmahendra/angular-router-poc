import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RzbRoutingModule } from './rzb-routing.module';
import { RzbComponent } from './rzb.component';


@NgModule({
  declarations: [
    RzbComponent
  ],
  imports: [
    CommonModule,
    RzbRoutingModule
  ]
})
export class RzbModule { }
