import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgreementService {

  constructor() { }

  productCode$ :BehaviorSubject<string> = new BehaviorSubject<string>('');

  getProduct(): Observable<string> {
    console.log('Mocking API call')
    return of('rzb').pipe(
      delay(500),
      tap(product => this.productCode$.next(product) )
      )
  }
}
