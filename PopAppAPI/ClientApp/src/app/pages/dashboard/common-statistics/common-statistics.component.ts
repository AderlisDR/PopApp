import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-statistics',
  templateUrl: './common-statistics.component.html',
  styleUrls: ['./common-statistics.component.scss']
})
export class CommonStatisticsComponent implements OnInit {
  isLoading = true;
  panelOpenState = true;
  testNumber = 10;

  constructor() { }

  ngOnInit() {
    this.isLoading = false;
  }

}
