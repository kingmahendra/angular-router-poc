import { NgModule } from '@angular/core';
import { Router, RouterModule, ROUTES, Routes, UrlMatchResult, UrlSegment } from '@angular/router';
import { AgreementObserverService } from './agreement-observer.service';
import { AgreementService } from './agreement.service';
import { SummaryGuard } from './guards/summary.guard';
import { HomeComponent } from './home/home.component';
import { SummaryIvbComponent } from './summary-ivb/summary-ivb.component';
import { SummaryRbbComponent } from './summary-rbb/summary-rbb.component';
import { SummaryRzbComponent } from './summary-rzb/summary-rzb.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  // {
  //   path: 'summary',
  //   component: SummaryComponent,
  //   canActivate:[SummaryGuard]
  // },
  { path: 'flow-manager', loadChildren: () => import('./modules/flow-manager/flow-manager.module').then(m => m.FlowManagerModule) },
  // {
  //   path: 'summary-rzb',
  //   loadChildren: () =>  import('./modules/rzb/rzb.module').then(m => m.RzbModule)
  // },
  // { path: 'summary',
  //  loadChildren: () => import('./modules/ivb/ivb.module').then(m => m.IvbModule)
  // },
  // { path: 'summary-rbb', loadChildren: () => import('./modules/rbb/rbb.module').then(m => m.RbbModule) },
  {
    path:'',
    component: HomeComponent
  },
  
];



@NgModule({
 
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
 

})
export class AppRoutingModule { }
