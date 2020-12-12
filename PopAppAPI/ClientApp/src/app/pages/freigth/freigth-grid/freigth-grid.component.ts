import { Component, OnInit } from '@angular/core';
import { Freigth } from '../../../models/freigth/freigth';
import { FreigthService } from '../../../services/freigth.service';

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

  constructor(private freigthService: FreigthService) { }

  ngOnInit() {
    this.onGetFreigth();
  }

  onExport() {}

  onGetFreigth() {
    this.freigthService.GetFreigths().then((resp: Freigth[]) => {
      this.freigthData = [...resp];
    }).catch();
  }

}
