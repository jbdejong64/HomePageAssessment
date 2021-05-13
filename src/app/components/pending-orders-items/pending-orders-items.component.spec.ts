import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PendingOrderCardItem } from 'src/app/assests/model';

import { PendingOrdersItemsComponent } from './pending-orders-items.component';

describe('PendingOrdersItemsComponent', () => {
  let component: PendingOrdersItemsComponent;
  let fixture: ComponentFixture<PendingOrdersItemsComponent>;

  const pendingItem: PendingOrderCardItem = {name:"Test", value:10, ageOfOrder:"15 days"}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingOrdersItemsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingOrdersItemsComponent);
    component = fixture.componentInstance;
    component.pendingOrder = pendingItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
