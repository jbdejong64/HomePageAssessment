import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-card',
  templateUrl: './map-card.component.html',
  styleUrls: ['./map-card.component.scss']
})
export class MapCardComponent implements OnInit {

  @Input() loading: boolean = true;

  zoom = 13;
  startingCenter: google.maps.LatLngLiteral = {lat:20.8846913 ,lng:-156.4647848};

  constructor() { }

  ngOnInit(): void {
  }

}
