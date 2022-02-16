import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes, UrlMatchResult, UrlSegment } from '@angular/router';
import { AgreementObserverService } from 'src/app/agreement-observer.service';
import { AgreementService } from 'src/app/agreement.service';
import { SummaryIvbComponent } from 'src/app/summary-ivb/summary-ivb.component';
import { SummaryRzbComponent } from 'src/app/summary-rzb/summary-rzb.component';
import { IvbComponent } from './ivb.component';

// const routes: Routes = [{ path: '', component: IvbComponent }];

function routesFactory(agreementService: AgreementService): Routes {
  return [
      {
        loadChildren: ()=> import('../rzb/rzb.module').then(m => m.RzbModule),
          matcher: (url: UrlSegment[]): UrlMatchResult | null => {
              if (url.length !== 0) {
                  return null;
              }

              if (agreementService.isRZB) {
                return { consumed: url };
              }

              return null;
          }
      },
      {
        // loadChildren: () => import('./ivb.module').then(m => m.IvbModule),
        component: SummaryIvbComponent,
          matcher: (url: UrlSegment[]): UrlMatchResult | null => {
              if (url.length !== 0) {
                  return null;
              }

              if (agreementService.isIVB) {
                  return { consumed: url };
              }

              return null;
          }
      },
      {
        path: '',
        component: IvbComponent
      }
  ]
}

@NgModule({
  exports: [RouterModule],
  providers: [
    {
        provide: ROUTES,
        useFactory: routesFactory,
        multi: true,
        deps: [AgreementService, AgreementObserverService],

    },
    AgreementObserverService
  ]
})
export class IvbRoutingModule { }
