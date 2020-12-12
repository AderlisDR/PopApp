import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DocumentGridComponent } from './document-grid/document-grid.component';
import { DocumentRoutingModule } from './document-routing.module';
import { DocumentsUploadComponent } from './documents-upload/documents-upload.component';

@NgModule({
  imports: [
    SharedModule,
    DocumentRoutingModule
  ],
  declarations: [
    DocumentGridComponent,
    DocumentsUploadComponent
  ]
})
export class DocumentModule { }
