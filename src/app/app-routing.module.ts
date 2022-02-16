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
    loadChildren: () =>  import('./modules/rzb/rzb.module').then(m => m.RzbModule)
  },
  { path: 'summary-ivb',
   loadChildren: () => import('./modules/ivb/ivb.module').then(m => m.IvbModule)
  },
  { path: 'summary-rbb', loadChildren: () => import('./modules/rbb/rbb.module').then(m => m.RbbModule) },
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
