import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgreementService {

  constructor() { }

  isRZB!:boolean;
  isIVB!: boolean;

  productCode$ :BehaviorSubject<string> =new BehaviorSubject<string>('ivb')

  getProduct(): Observable<string> {
    return of('rzb').pipe(
      delay(500),
      tap(product=> this.productCode$.next(product) ))
  }
}
