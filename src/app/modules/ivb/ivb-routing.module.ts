import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IvbComponent } from './ivb.component';

const routes: Routes = [{ path: '', component: IvbComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IvbRoutingModule { }
