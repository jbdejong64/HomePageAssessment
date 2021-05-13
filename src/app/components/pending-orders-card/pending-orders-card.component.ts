import { Component, OnInit, Input } from '@angular/core';
import { PendingOrderCardItem } from 'src/app/assests/model';
import { MatDialog } from '@angular/material/dialog';
import { PendingOrdersCardFullComponent } from '../pending-orders-card-full/pending-orders-card-full.component';

@Component({
  selector: 'app-pending-orders-card',
  templateUrl: './pending-orders-card.component.html',
  styleUrls: ['./pending-orders-card.component.scss']
})
export class PendingOrdersCardComponent implements OnInit {

  @Input() loading: boolean = true;
  @Input() pendingOrderItems!: PendingOrderCardItem[];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openPendingOrdersExpandedDialog() {
    let dialogRef = this.dialog.open(PendingOrdersCardFullComponent);
    let instance = dialogRef.componentInstance;
    instance.pendingOrderItems = this.pendingOrderItems;
  }

}
