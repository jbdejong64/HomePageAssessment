import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountInfo } from 'src/app/assests/model';

@Component({
  selector: 'app-home-page-header',
  templateUrl: './home-page-header.component.html',
  styleUrls: ['./home-page-header.component.scss']
})
export class HomePageHeaderComponent implements OnInit {

  @Input() accountInfo!: AccountInfo;
  @Output() pageSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onAccountButtonClick(btnName: string){
    this.pageSelected.emit(btnName);
  }

  clickAlert(btnName: string){
    alert(btnName);
  }
}
