import { Component, OnInit } from '@angular/core';
import { Document } from '../../models/document/document';
import { DocumentService } from '../../services/document/document.service';

@Component({
  selector: 'app-document-grid',
  templateUrl: './document-grid.component.html',
  styleUrls: ['./document-grid.component.scss']
})
export class DocumentGridComponent implements OnInit {

  documentData: Document[];
  groupPanelTexts = {
    groupByThisColumn: 'Agrupar por esta columna',
    groupContinuedMessage: 'Continuación desde la página anterior',
    groupContinuesMessage: 'Continúa en la siguiente página'
  };

  constructor(private documentServices: DocumentService) { }

  ngOnInit() {
    this.onGetDocuments();
  }

  onExport(){}

  onGetDocuments(){
    this.documentServices.GetDocuments().then((resp: Document[])=>{
        this.documentData = [...resp];
    }).catch(err =>{});
  }

}
