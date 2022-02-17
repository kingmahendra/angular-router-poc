import { Component, OnInit } from '@angular/core';
import { AgreementService } from 'src/app/agreement.service';

@Component({
  selector: 'app-ivb',
  templateUrl: './ivb.component.html',
  styleUrls: ['./ivb.component.css']
})
export class IvbComponent implements OnInit {

  constructor( private agreementService: AgreementService) { }

  ngOnInit(): void {
   this.agreementService.getProduct().subscribe()
  }

}
