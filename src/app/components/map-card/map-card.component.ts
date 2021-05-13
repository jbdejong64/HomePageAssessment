import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-card',
  templateUrl: './map-card.component.html',
  styleUrls: ['./map-card.component.scss']
})
export class MapCardComponent implements OnInit {

  @Input() loading: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
