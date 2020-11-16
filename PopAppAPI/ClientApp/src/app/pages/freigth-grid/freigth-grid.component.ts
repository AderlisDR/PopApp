import { Component, OnInit } from '@angular/core';
import { Freigth } from 'src/app/models/freigth/freigth';

@Component({
  selector: 'app-freigth-grid',
  templateUrl: './freigth-grid.component.html',
  styleUrls: ['./freigth-grid.component.scss']
})
export class FreigthGridComponent implements OnInit {

  freigthData: Freigth[];
  groupPanelTexts = {
    groupByThisColumn: 'Agrupar por esta columna',
    groupContinuedMessage: 'Continuación desde la página anterior',
    groupContinuesMessage: 'Continúa en la siguiente página'
  };

  constructor() { }

  ngOnInit() {
  }

  onExport(){}

}
