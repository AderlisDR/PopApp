import { Component, OnInit } from '@angular/core';
import { Container } from '../../../models/container/container';
import { ContainerService } from '../../../services/container.service';

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


  constructor(private containerService: ContainerService) { }

  ngOnInit() {
    this.onGetContainers();
  }

  onExport() {

  }

  onGetContainers() {
    this.containerService.GetContainers().then((resp: Container[]) => {
        this.containerData = [...resp];
    }).catch( err => {});
  }

}
