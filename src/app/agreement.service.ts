import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgreementService {

  constructor() { }

  getProduct(): Observable<string> {
    return of('rzb').pipe(delay(500))
  }
}
