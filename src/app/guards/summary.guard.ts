import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators'
import { AgreementService } from '../agreement.service';

@Injectable({
  providedIn: 'root'
})
export class SummaryGuard implements CanActivate {
  constructor(private agreementService: AgreementService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.agreementService.getProduct().pipe(
      map(product => {
        const summaryRoute = 'summary-'+product;
      
        return this.router.createUrlTree([summaryRoute])
      })
    );
  }
  
}
