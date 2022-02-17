import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes, UrlMatchResult, UrlSegment } from '@angular/router';
import { AgreementObserverService } from 'src/app/agreement-observer.service';
import { AgreementService } from 'src/app/agreement.service';
import { SummaryIvbComponent } from 'src/app/summary-ivb/summary-ivb.component';
import { IvbComponent } from '../ivb/ivb.component';
import { FlowManagerComponent } from './flow-manager.component';

const routes: Routes = [{ path: '', component: FlowManagerComponent }];

function routesFactory(agreementService: AgreementService): Routes {
  // agreementService.getProduct().subscribe();
  return [
    {
      loadChildren: () => import('../rzb/rzb.module').then((m) => m.RzbModule),
      matcher: (url: UrlSegment[]): UrlMatchResult | null => {
        if (url.length !== 0) {
          return null;
        }

        if (agreementService.productCode$.value === 'rzb') {
          return { consumed: url };
        }

        return null;
      },
    },
    {
      loadChildren: () => import('../rbb/rbb.module').then((m) => m.RbbModule),
      matcher: (url: UrlSegment[]): UrlMatchResult | null => {
        if (url.length !== 0) {
          return null;
        }

        if (agreementService.productCode$.value === 'rbb') {
          return { consumed: url };
        }

        return null;
      },
    },
    {
      loadChildren: () => import('../ivb/ivb.module').then(m => m.IvbModule),
      // component: SummaryIvbComponent,
      matcher: (url: UrlSegment[]): UrlMatchResult | null => {
        if (url.length !== 0) {
          return null;
        }

        if (agreementService.productCode$.value === 'ivb') {
          return { consumed: url };
        }

        return null;
      },
    },
    {
      path: '',
      component: FlowManagerComponent,
    },
  ];
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
    AgreementObserverService,
  ],
})
export class FlowManagerRoutingModule { }
