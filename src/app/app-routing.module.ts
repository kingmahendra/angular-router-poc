import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryGuard } from './guards/summary.guard';
import { HomeComponent } from './home/home.component';
import { SummaryIvbComponent } from './summary-ivb/summary-ivb.component';
import { SummaryRbbComponent } from './summary-rbb/summary-rbb.component';
import { SummaryRzbComponent } from './summary-rzb/summary-rzb.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {
    path: 'summary',
    component: SummaryComponent,
    canActivate:[SummaryGuard]
  },
  {
    path: 'summary-rzb',
    component: SummaryRzbComponent
  },
  {
    path: 'summary-ivb',
    component: SummaryIvbComponent
  },
  {
    path: 'summary-rbb',
    component: SummaryRbbComponent
  },
  {
    path:'',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
