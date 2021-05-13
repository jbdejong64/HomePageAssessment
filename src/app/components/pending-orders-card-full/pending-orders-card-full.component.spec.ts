import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingOrdersCardFullComponent } from './pending-orders-card-full.component';

describe('PendingOrdersCardFullComponent', () => {
  let component: PendingOrdersCardFullComponent;
  let fixture: ComponentFixture<PendingOrdersCardFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingOrdersCardFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingOrdersCardFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
