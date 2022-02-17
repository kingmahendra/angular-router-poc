import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { delay, skip } from 'rxjs/operators';
import { AgreementService } from './agreement.service';

@Injectable()
export class AgreementObserverService implements OnDestroy {
    constructor(
        private agreementService: AgreementService,
        private router: Router
    ) {}

    private authChangeSubscription: Subscription = this
        .agreementService
        .productCode$
        .pipe(skip(1))
        .subscribe(() => {
           
            if (this.router.url !== '/flow-manager') {
                return;
            }

            this.router.navigated = false;
            this.router.navigate([this.router.url]);
        });

    public ngOnDestroy(): void {
        this.authChangeSubscription.unsubscribe();
    }
 
}
