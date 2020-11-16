import { Component, OnInit } from '@angular/core';
import { Vessel } from 'src/app/models/vessel/vessel';

@Component({
  selector: 'app-vessel-grid',
  templateUrl: './vessel-grid.component.html',
  styleUrls: ['./vessel-grid.component.scss']
})
export class VesselGridComponent implements OnInit {

  vesselData: Vessel[];
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
