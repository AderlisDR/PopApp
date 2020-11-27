import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Document } from '../../../models/document/document';
import { ImageDimensions } from '../../../models/document/image-dimentions';
import { DocumentService } from '../../../services/document.service';
import { getImageDimensionsFromBase64 } from '../../../services/functions/get-image-dimentions-from-base64.function';

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

  onExport() {}

  onGetDocuments() {
    this.documentServices.GetDocuments().then((resp: Document[]) => {
        this.documentData = [...resp];
    }).catch(err => {});
  }

  async handleImageClick(imageBase64: string, imageName: string): Promise<void> {
    const imageDimentions: ImageDimensions = await getImageDimensionsFromBase64(imageBase64);

    Swal.fire({
      showConfirmButton: false,
      showCloseButton: true,
      width: imageDimentions.width + 100,
      focusCancel: true,
      imageUrl: imageBase64,
      imageWidth: imageDimentions.width,
      imageHeight: imageDimentions.height,
      imageAlt: imageName
    });
  }

}
