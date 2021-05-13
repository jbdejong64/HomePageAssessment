import { Component, Input, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { OrderHistoryTableItem } from 'src/app/assests/model';
import { MatDialog } from '@angular/material/dialog';
import { OrderHistoryTableFullComponent } from '../order-history-table-full/order-history-table-full.component';

@Component({
  selector: 'app-order-history-table',
  templateUrl: './order-history-table.component.html',
  styleUrls: ['./order-history-table.component.scss']
})
export class OrderHistoryTableComponent implements OnInit {

  @Input() loading: boolean = true;
  @Input() tableData!: OrderHistoryTableItem[]; 

  displayedColumns: string[] = ['orderNumber', 'created', 'totalWorkAmount', 'product', 'status'];
  dataSource = new MatTableDataSource(this.tableData);

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  openOrderHistoryTableExpandedDialog() {
    let dialogRef = this.dialog.open(OrderHistoryTableFullComponent);
    let instance = dialogRef.componentInstance;
    instance.tableData = this.tableData;
  }
}
