import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/company/company';
import { CompanyService } from '../../services/company/company.service';

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


  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.onGetCompanies();
  }

  onExport() {
    // TO DO
  }

  onGetCompanies(){
    this.companyService.GetCompanies().then((resp: Company[]) =>{
         this.companyData = [...resp];
    }).catch(err =>{
        
    });
  }

}
