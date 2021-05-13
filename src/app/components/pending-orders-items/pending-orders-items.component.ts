import { Component, Input, OnInit } from '@angular/core';
import { PendingOrderCardItem } from 'src/app/assests/model'

@Component({
  selector: 'app-pending-orders-items',
  templateUrl: './pending-orders-items.component.html',
  styleUrls: ['./pending-orders-items.component.scss']
})
export class PendingOrdersItemsComponent implements OnInit {
  @Input() pendingOrder!: PendingOrderCardItem;

  constructor() { }

  ngOnInit(): void {
    
  }
}
