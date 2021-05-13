import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewCardComponent } from './components/overview-card/overview-card.component';
import { MapCardComponent } from './components/map-card/map-card.component';
import { OrderHistoryTableComponent } from './components/order-history-table/order-history-table.component';
import { CheckBoxFilterComponent } from './components/check-box-filter/check-box-filter.component';
import { PendingOrdersCardComponent } from './components/pending-orders-card/pending-orders-card.component';
import { HomePageHeaderComponent } from './components/home-page-header/home-page-header.component';
import { PendingOrdersItemsComponent } from './components/pending-orders-items/pending-orders-items.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table' 
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule} from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToastrModule } from 'ngx-toastr';

import { FilterPipe } from './pipes/filter';
import { PendingOrdersCardFullComponent } from './components/pending-orders-card-full/pending-orders-card-full.component';
import { OrderHistoryTableFullComponent } from './components/order-history-table-full/order-history-table-full.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewCardComponent,
    MapCardComponent,
    OrderHistoryTableComponent,
    CheckBoxFilterComponent,
    PendingOrdersCardComponent,
    HomePageHeaderComponent,
    PendingOrdersItemsComponent,
    FilterPipe,
    PendingOrdersCardFullComponent,
    OrderHistoryTableFullComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot({})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
