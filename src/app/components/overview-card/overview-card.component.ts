// Card that displays an overview of total projects, revenue, and percent variance

// Uses loading boolean input for cases where input data returns asynchronous 

import { Component, Input, OnInit } from '@angular/core';
import { HomePageOverview } from '../../assests/model';

@Component({
  selector: 'app-overview-card',
  templateUrl: './overview-card.component.html',
  styleUrls: ['./overview-card.component.scss']
})
export class OverviewCardComponent implements OnInit {

  @Input() loading: boolean = true;
  @Input() overview!: HomePageOverview;

  constructor() { }

  ngOnInit(): void {
  }

}
