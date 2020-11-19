import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadFile } from 'ng-zorro-antd/upload';
import Swal from 'sweetalert2';
import { ImageDimensions } from '../../models/document/image-dimentions';
import { Vessel } from '../../models/vessel/vessel';
import { getBase64FromFile } from '../../services/functions/get-base64-from-file.function';
import { getImageDimensionsFromBase64 } from '../../services/functions/get-image-dimentions-from-base64.function';

@Component({
  selector: 'app-documents-upload',
  templateUrl: './documents-upload.component.html',
  styleUrls: ['./documents-upload.component.css']
})
export class DocumentsUploadComponent implements OnInit {
  vessels: Vessel[] = [];
  vesselDocumentForm: FormGroup;
  fileList = [];
  acceptedFileTypes = 'image/png,image/jpeg,image/tiff';
  showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };

  constructor(@Inject('BASE_URL') public baseUrl: string,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.vesselDocumentForm = this.formBuilder.group({
      description: ['', Validators.required]
    });
  }

  handleSelectChange(event: any) {
    //
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
