import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadFile } from 'ng-zorro-antd/upload';
import Swal from 'sweetalert2';
import { Document } from '../../../models/document/document';
import { ImageDimensions } from '../../../models/document/image-dimentions';
import { VesselCombo } from '../../../models/vessel/vessel-combo';
import { DocumentService } from '../../../services/document.service';
import { getBase64FromFile } from '../../../services/functions/get-base64-from-file.function';
import { getImageDimensionsFromBase64 } from '../../../services/functions/get-image-dimentions-from-base64.function';
import { VesselService } from '../../../services/vessel.service';

@Component({
  selector: 'app-documents-upload',
  templateUrl: './documents-upload.component.html',
  styleUrls: ['./documents-upload.component.css']
})
export class DocumentsUploadComponent implements OnInit {
  vessels: VesselCombo[] = [];
  vesselDocumentForm: FormGroup;
  fileList = [];
  acceptedFileTypes = 'image/png,image/jpeg,image/tiff';
  showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };
  showImageRequiredError: boolean;
  showVesselRequiredError: boolean;

  constructor(@Inject('BASE_URL') public baseUrl: string,
    private formBuilder: FormBuilder,
    private vesselService: VesselService,
    private documentService: DocumentService) { }

  ngOnInit() {
    this.getVesselCombo();
    this.buildForm();
  }

  getVesselCombo() {
    this.vesselService.GetVesselCombo().then((response: VesselCombo[]) => {
      this.vessels = [...response];
    }).catch((error: HttpErrorResponse) => {
      Swal.fire({
        icon: 'error',
        text: error.error
      });
    });
  }

  buildForm() {
    this.vesselDocumentForm = this.formBuilder.group({
      vesselId: [Validators.required],
      description: ['', Validators.required],
      image: [Validators.required]
    });
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

  handleBeforeUpload(file: UploadFile, fileList: UploadFile[]) {
    this.showImageRequiredError = false;
  }

  handleSelectChange() {
    this.showVesselRequiredError = false;
  }

  onSubmit() {
    if (isNaN(this.vesselDocumentForm.controls.vesselId.value)) {
      this.showVesselRequiredError = true;
      return;
    }

    if (this.fileList.length < 1) {
      this.showImageRequiredError = true;
      return;
    }

    const documentRequest: Document = {
      documentTitle: this.fileList[0].name,
      documentDescription: this.vesselDocumentForm.controls.description.value,
      documentImage: this.fileList[0].thumbUrl,
      vesselId: this.vesselDocumentForm.controls.vesselId.value,
    };

    this.documentService.PostDocument(documentRequest).then(() => {
      Swal.fire({
        icon: 'success',
        text: 'El documento se ha guardado con éxito'
      });
    }).catch((error: HttpErrorResponse) => {
      Swal.fire({
        icon: 'error',
        text: error.error
      });
    });
  }

}
