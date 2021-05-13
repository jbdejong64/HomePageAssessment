import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CheckboxCardItem, HomePageOverview, PendingOrderCardItem, OrderHistoryTableItem, AccountInfo } from './assests/model';
import { JsonTestData } from  './assests/testInput';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myHomePage';
  opened: boolean = true;
  currentPage: string = 'home';

  accountInfo: AccountInfo = {} as AccountInfo;
  homePageOverview: HomePageOverview = {} as HomePageOverview;
  checkBoxItems: CheckboxCardItem[] = [];
  pendingOrderItems: PendingOrderCardItem[] = [];
  orderHistoryTableItems: OrderHistoryTableItem[] = [];

  mapLoading = false;
  homePageOverviewLoading = true;
  checkBoxItemsLoading = true;
  pendingOrderItemsLoading = true;
  orderHistoryTableItemsLoading = true;

  constructor(private toastr: ToastrService){}

  ngOnInit(): void {
    this.toastr.warning("Please continue to finish the process", "Notification!", {
      closeButton: true,
      disableTimeOut: true,
      tapToDismiss: false,
      positionClass: 'toast-bottom-center'
    });

    // This is the area where services would be called with subscribe to pull api data
    // Every components loading would be set to true until subscribe completes or fails
    // If the subscribe fails error components states would be called via ()Input
    this.accountInfo = JsonTestData.accountInfo;

    this.homePageOverview = JsonTestData.overview;
    setTimeout(()=> {this.homePageOverviewLoading=false;}, 1000);

    this.checkBoxItems = JsonTestData.checkboxCardItems;
    setTimeout(()=> {this.checkBoxItemsLoading=false;}, 3000);

    this.pendingOrderItems = JsonTestData.pendingOrderItems;
    setTimeout(()=> {this.pendingOrderItemsLoading=false;}, 5000);

    for(var i=0; i < JsonTestData.orderHistoryTableItem.length; i++){
      var tableItem: OrderHistoryTableItem = {} as OrderHistoryTableItem;
      tableItem.orderNumber = JsonTestData.orderHistoryTableItem[i].orderNumber;
      tableItem.created = new Date(JsonTestData.orderHistoryTableItem[i].created);
      tableItem.totalWorkAmount = JsonTestData.orderHistoryTableItem[i].totalWorkAmount;
      tableItem.product = JsonTestData.orderHistoryTableItem[i].product;
      tableItem.status = JsonTestData.orderHistoryTableItem[i].status;

      this.orderHistoryTableItems.push(tableItem);
    }
    setTimeout(()=> {this.orderHistoryTableItemsLoading=false;}, 7000);
  }

  public changePageClick(btnName: string) {
    this.currentPage = btnName;
  }
}
