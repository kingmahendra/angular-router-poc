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

  productCode$ :BehaviorSubject<string> = new BehaviorSubject<string>('');

  getProduct(): Observable<string> {
    return of('ivb').pipe(
      tap(product => this.productCode$.next(product) ),
      delay(500))
  }
}
