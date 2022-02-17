import { Component, OnInit } from '@angular/core';
import { AgreementService } from 'src/app/agreement.service';

@Component({
  selector: 'app-flow-manager',
  templateUrl: './flow-manager.component.html',
  styleUrls: ['./flow-manager.component.css']
})
export class FlowManagerComponent implements OnInit {

  constructor( private agreementService: AgreementService) { }

  ngOnInit(): void {
   this.agreementService.getProduct().subscribe()
  }

}
