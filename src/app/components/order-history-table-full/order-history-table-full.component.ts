// Table component with custom header with paginator, sorting, scrolling contained in a dialog popup

import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OrderHistoryTableItem } from 'src/app/assests/model';

@Component({
  selector: 'app-order-history-table-full',
  templateUrl: './order-history-table-full.component.html',
  styleUrls: ['./order-history-table-full.component.scss']
})
export class OrderHistoryTableFullComponent implements OnInit {
  @Input() tableData!: OrderHistoryTableItem[]; 

  displayedColumns: string[] = ['orderNumber', 'created', 'totalWorkAmount', 'product', 'status'];
  dataSource = new MatTableDataSource(this.tableData);

  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.tableData);
  }
}
