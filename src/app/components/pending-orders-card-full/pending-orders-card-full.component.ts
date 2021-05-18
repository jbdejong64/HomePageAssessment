// Component card that displays a scrolling list of PendingOrderCardItem(name:string, value:number, ageOfOrder:string)

import { Component, Input, OnInit } from '@angular/core';
import { PendingOrderCardItem } from 'src/app/assests/model';

@Component({
  selector: 'app-pending-orders-card-full',
  templateUrl: './pending-orders-card-full.component.html',
  styleUrls: ['./pending-orders-card-full.component.scss']
})
export class PendingOrdersCardFullComponent implements OnInit {

  @Input() pendingOrderItems!: PendingOrderCardItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
