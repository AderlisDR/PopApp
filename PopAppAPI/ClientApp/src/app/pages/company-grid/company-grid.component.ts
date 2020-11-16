import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company/company';

@Component({
  selector: 'app-company-grid',
  templateUrl: './company-grid.component.html',
  styleUrls: ['./company-grid.component.scss']
})
export class CompanyGridComponent implements OnInit {

  public companyData: Company[];
  groupPanelTexts = {
    groupByThisColumn: 'Agrupar por esta columna',
    groupContinuedMessage: 'Continuación desde la página anterior',
    groupContinuesMessage: 'Continúa en la siguiente página'
  };


  constructor() { }

  ngOnInit() {
  }

  onExport() {
    // TO DO
  }

}
