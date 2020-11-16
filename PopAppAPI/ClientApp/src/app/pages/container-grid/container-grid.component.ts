import { Component, OnInit } from '@angular/core';
import { Container } from 'src/app/models/container/container';

@Component({
  selector: 'app-container-grid',
  templateUrl: './container-grid.component.html',
  styleUrls: ['./container-grid.component.scss']
})
export class ContainerGridComponent implements OnInit {

  containerData: Container[];
  groupPanelTexts = {
    groupByThisColumn: 'Agrupar por esta columna',
    groupContinuedMessage: 'Continuación desde la página anterior',
    groupContinuesMessage: 'Continúa en la siguiente página'
  };


  constructor() { }

  ngOnInit() {
  }

  onExport(){
    
  }

}
