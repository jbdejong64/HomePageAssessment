import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { AccountInfo } from 'src/app/assests/model';

import { HomePageHeaderComponent } from './home-page-header.component';

describe('HomePageHeaderComponent', () => {
  let component: HomePageHeaderComponent;
  let fixture: ComponentFixture<HomePageHeaderComponent>;

  const accountInfo: AccountInfo = {name:"Mathew Test", email:"mt@gmail.com"}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageHeaderComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [MatMenuModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageHeaderComponent);
    component = fixture.componentInstance;
    component.accountInfo = accountInfo;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
