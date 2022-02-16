import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { delay, skip } from 'rxjs/operators';
import { AgreementService } from './agreement.service';

@Injectable({
  providedIn: 'root'
})
export class AgreementObserverService implements OnDestroy {
    constructor(
        private agreementService: AgreementService,
        private router: Router
    ) {}

    private authChangeSubscription: Subscription = this
        .agreementService
        .productCode$
        .pipe(skip(1))
        .subscribe((value) => {
            console.log('product code ---', value);
            //this.agreementService.productCode$.next(value);
            if(value === 'ivb') {
                this.agreementService.isIVB = true;
                this.agreementService.isRZB = false;
            }else if(value === 'rzb') {
                this.agreementService.isRZB = true;
                this.agreementService.isIVB = false;
            }
            if (this.router.url !== '/') {
                return;
            }

            this.router.navigated = false;
            this.router.navigate([this.router.url]);
        });

    public ngOnDestroy(): void {
        this.authChangeSubscription.unsubscribe();
    }
 
}
