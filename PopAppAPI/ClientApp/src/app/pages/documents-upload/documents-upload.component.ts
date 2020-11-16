import { Component, OnInit } from '@angular/core';
import { UploadFile } from 'ng-zorro-antd/upload';
import Swal from 'sweetalert2';
import { ImageDimensions } from '../../models/document/image-dimentions';
import { getBase64FromFile } from '../../services/functions/get-base64-from-file.function';
import { getImageDimensionsFromBase64 } from '../../services/functions/get-image-dimentions-from-base64.function';

@Component({
  selector: 'app-documents-upload',
  templateUrl: './documents-upload.component.html',
  styleUrls: ['./documents-upload.component.css']
})
export class DocumentsUploadComponent implements OnInit {
  fileList = [];
  acceptedFileTypes = 'image/png,image/jpeg,image/tiff';
  showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };

  constructor() { }

  ngOnInit() {
  }

  async handlePreview(file: UploadFile) {
    if (!file.url && !file.preview) {
      file.preview = await getBase64FromFile(file.originFileObj);
    }

    const imageDimentions: ImageDimensions = await getImageDimensionsFromBase64(file.preview);

    Swal.fire({
      showConfirmButton: false,
      showCloseButton: true,
      width: imageDimentions.width + 100,
      focusCancel: true,
      imageUrl: file.url || file.preview,
      imageWidth: imageDimentions.width,
      imageHeight: imageDimentions.height,
      imageAlt: file.name
    });
  }

}
