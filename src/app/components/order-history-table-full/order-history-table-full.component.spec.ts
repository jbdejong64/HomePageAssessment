import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHistoryTableFullComponent } from './order-history-table-full.component';

describe('OrderHistoryTableFullComponent', () => {
  let component: OrderHistoryTableFullComponent;
  let fixture: ComponentFixture<OrderHistoryTableFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderHistoryTableFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderHistoryTableFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
