import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes, UrlMatchResult, UrlSegment } from '@angular/router';
import { AgreementObserverService } from 'src/app/agreement-observer.service';
import { AgreementService } from 'src/app/agreement.service';
import { FlowManagerComponent } from './flow-manager.component';

const routes: Routes = [{ path: '', component: FlowManagerComponent }];

function routesFactory(agreementService: AgreementService): Routes {
  return [
    {
      loadChildren: () => import('../rzb/rzb.module').then((m) => m.RzbModule),
      matcher: (url: UrlSegment[]): UrlMatchResult | null => { return productMatcher(url, 'rzb', agreementService) }
    },
    {
      loadChildren: () => import('../rbb/rbb.module').then((m) => m.RbbModule),
      matcher: (url: UrlSegment[]): UrlMatchResult | null => { return productMatcher(url, 'rbb', agreementService) }
    },
    {
      loadChildren: () => import('../ivb/ivb.module').then(m => m.IvbModule),
      matcher: (url: UrlSegment[]): UrlMatchResult | null => { return productMatcher(url, 'ivb', agreementService) }
    },
    {
      path: '',
      component: FlowManagerComponent,
    },
  ];
}

function productMatcher(url: UrlSegment[], product: string, agreementService: AgreementService): UrlMatchResult | null {
  if (url.length !== 0) {
    return null;
  }

  if (agreementService.productCode$.value === product) {
    return { consumed: url };
  }

  return null;
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
