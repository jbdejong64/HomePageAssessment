// Creates a checkbox card that displays an array of CheckboxCardItem( name: string, selected: boolean ). The array of CheckboxCardItem can be filtered with a custom pipe 'filter'
// from a text input. The apply button will display/set selected checkboxes

// Uses loading boolean input for cases where input data returns asynchronous 

import { Component, Input, OnInit } from '@angular/core';
import { CheckboxCardItem } from '../../assests/model'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-check-box-filter',
  templateUrl: './check-box-filter.component.html',
  styleUrls: ['./check-box-filter.component.scss']
})
export class CheckBoxFilterComponent implements OnInit {

  @Input() loading: boolean = true;
  @Input() checkBoxes!: CheckboxCardItem[];

  searchText: string = "";
  selectedValueName: string = "";
  selectedValues: CheckboxCardItem[] = [];

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.selectedValues = this.checkBoxes.filter(s => s.selected);

  }

  updateSelectedValues(){
    this.selectedValues = this.checkBoxes.filter(s => s.selected);
  }

  // Show selected checkboxes from input 'checkBoxes' on a toastr popup
  applyCheckedBoxes() {
    this.selectedValueName = "";

    this.selectedValues.forEach((selectedBox, index) => {
      if(index !== this.selectedValues.length-1) {
        this.selectedValueName += selectedBox.name + ', ';
      } else {
        this.selectedValueName += selectedBox.name;
      }
    })

    if(this.selectedValueName === ""){
      this.selectedValueName = "no";
    }

    this.toastr.success("You did a thing with applying: " + this.selectedValueName + " checkboxes!", "Checkboxes applied!", {
      closeButton: true,
      disableTimeOut: true,
      tapToDismiss: false,
      positionClass: 'toast-center-center'
    });
  }
}
