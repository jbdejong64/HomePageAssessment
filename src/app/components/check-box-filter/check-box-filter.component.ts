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

  /*checkBoxes: CheckboxCardItem[] = [
    { name: "Apple", selected: true},
    { name: "Pear", selected: true},
    { name: "Dog", selected: false},
    { name: "Bird", selected: false},
    { name: "Cat", selected: false}
  ]*/

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.selectedValues = this.checkBoxes.filter(s => s.selected);

  }

  updateSelectedValues(){
    this.selectedValues = this.checkBoxes.filter(s => s.selected);

    this.selectedValues.forEach(s => {
      console.log(s.name);
    })
  }

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
