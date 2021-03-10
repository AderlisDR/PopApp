import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freigth-types-dash',
  templateUrl: './freigth-types-dash.component.html',
  styleUrls: ['./freigth-types-dash.component.css']
})
export class FreigthTypesDashComponent implements OnInit {
  isLoading = true;
  panelOpenState = true;
  areas: any[] = [{
    country: "Electrodomésticos",
    area: 12
  }, {
    country: "Muebles",
    area: 46
  }, {
    country: "Tecnología",
    area: 47
  }, {
    country: "Ropa",
    area: 110
  }, {
    country: "Productos de belleza",
    area: 72
  }, {
    country: "Limpieza",
    area: 31
  }, {
    country: "Juguetes",
    area: 20
  }, {
    country: "Otros",
    area: 55
  }];

  constructor() { }

  ngOnInit() {
    this.isLoading = false;
  }

  pointClickHandler(e) {
    this.toggleVisibility(e.target);
  }

  legendClickHandler(e) {
    let arg = e.target,
      item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

    this.toggleVisibility(item);
  }

  toggleVisibility(item) {
    if (item.isVisible()) {
      item.hide();
    } else {
      item.show();
    }
  }

  customizeLabel(arg) {
    return arg.valueText + " (" + arg.percentText + ")";
  }
}
