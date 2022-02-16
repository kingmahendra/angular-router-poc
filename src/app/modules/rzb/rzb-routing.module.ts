import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RzbComponent } from './rzb.component';

const routes: Routes = [{ path: '', component: RzbComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RzbRoutingModule { }
