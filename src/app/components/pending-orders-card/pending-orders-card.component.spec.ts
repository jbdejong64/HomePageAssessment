import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingOrdersCardComponent } from './pending-orders-card.component';

describe('PendingOrdersCardComponent', () => {
  let component: PendingOrdersCardComponent;
  let fixture: ComponentFixture<PendingOrdersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingOrdersCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingOrdersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
