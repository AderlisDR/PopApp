import { Component, OnInit } from '@angular/core';
import { Vessel } from '../../../models/vessel/vessel';
import { VesselService } from '../../../services/vessel.service';

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

  constructor(private vesselService: VesselService) { }

  ngOnInit() {
    this.onGetVessels();
  }

  onExport(){}

  onGetVessels(){
    this.vesselService.GetVessels().then((resp: Vessel[])=>{
      this.vesselData = [...resp];
    }).catch(err => {});
  }

}
