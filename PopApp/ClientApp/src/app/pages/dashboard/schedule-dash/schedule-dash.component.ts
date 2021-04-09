import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-dash',
  templateUrl: './schedule-dash.component.html',
  styleUrls: ['./schedule-dash.component.css']
})
export class ScheduleDashComponent implements OnInit {
  isLoading = true;
  panelOpenState = true;
  months: { id: number, day: Date }[] = [{
    id: 1,
    day: new Date("2021-02-07")
  }, {
    id: 2,
    day: new Date("2021-02-08")
  }, {
    id: 3,
    day: new Date("2021-02-09")
  }, {
    id: 4,
    day: new Date("2021-02-10")
  }, {
    id: 5,
    day: new Date("2021-02-11")
  }, {
    id: 6,
    day: new Date("2021-02-12")
  }, {
    id: 7,
    day: new Date("2021-02-13")
  }];
  valueAxis = {
    valueType: 'numeric',
    grid: {
      opacity: 0.2
    },
    label: {
      customizeText: this.customizeText
    }
  };
  chartDataSource: {date: Date, qty: number}[] = [
    {
      date: new Date("2021-02-07"),
      qty: 5
    },
    {
      date: new Date("2021-02-08"),
      qty: 10
    },
    {
      date: new Date("2021-02-09"),
      qty: 50
    },
    {
      date: new Date("2021-02-10"),
      qty: 30
    },
    {
      date: new Date("2021-02-11"),
      qty: 76
    },
    {
      date: new Date("2021-02-12"),
      qty: 2
    },
    {
      date: new Date("2021-02-13"),
      qty: 34
    }
  ];

  constructor() { }

  ngOnInit() {
    this.isLoading = false;
  }

  customizeTooltip(arg) {
    return {
      text: arg.valueText + ' buques'
    };
  }

  customizeText(arg) {
    return arg.valueText + ' buques';
  }

}
