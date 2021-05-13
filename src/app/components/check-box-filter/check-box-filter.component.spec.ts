import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { CheckboxCardItem } from 'src/app/assests/model';
import { FilterPipe } from 'src/app/pipes/filter';

import { CheckBoxFilterComponent } from './check-box-filter.component';

describe('CheckBoxFilterComponent', () => {
  let component: CheckBoxFilterComponent;
  let fixture: ComponentFixture<CheckBoxFilterComponent>;

  const checkboxItem: CheckboxCardItem[] = [{name:"Test", selected: true}];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckBoxFilterComponent, FilterPipe ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ToastrModule.forRoot()],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBoxFilterComponent);
    component = fixture.componentInstance;
    component.checkBoxes = checkboxItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
