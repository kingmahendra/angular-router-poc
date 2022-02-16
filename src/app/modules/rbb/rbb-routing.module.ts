import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RbbComponent } from './rbb.component';

const routes: Routes = [{ path: '', component: RbbComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RbbRoutingModule { }
