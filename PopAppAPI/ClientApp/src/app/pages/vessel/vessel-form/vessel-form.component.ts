import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Vessel } from '../../../models/vessel/vessel';
import { NotificationService } from '../../../services/notification.service';
import { VesselService } from '../../../services/vessel.service';

@Component({
  selector: 'app-vessel-form',
  templateUrl: './vessel-form.component.html',
  styleUrls: ['./vessel-form.component.css'],
})
export class VesselFormComponent implements OnInit {
  vesselForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private vesselService: VesselService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<VesselFormComponent>) { }

  ngOnInit() {
    this.formBuild();
  }

  private formBuild() {
    this.vesselForm = this.formBuilder.group({
      vesselName: ['', [Validators.required]],
      vesselCode: ['', [Validators.required]],
      vesselImo: ['', [Validators.required]],
      vesselFlag: ['', [Validators.required]],
      vesselSlora: ['', [Validators.required]],
      vesselArrival: ['', [Validators.required]],
    });
  }

  createVessel() {
    let vessel: Vessel = {
      vesselName: this.vesselForm.controls.vesselName.value,
      vesselCode: this.vesselForm.controls.vesselCode.value,
      vesselImo: this.vesselForm.controls.vesselImo.value,
      vesselFlag: this.vesselForm.controls.vesselFlag.value,
      vesselSlora: this.vesselForm.controls.vesselSlora.value,
      vesselArrival: this.vesselForm.controls.vesselArrival.value,
    }

    this.notificationService.showLoading();
    this.vesselService.PostVessel(vessel).then(() => {
      this.vesselForm.reset();
      this.notificationService.showSuccessMessage('Contenedor registrado con éxito.');
      this.dialogRef.close(true);
    }).catch((error: HttpErrorResponse) => {
      this.notificationService.showErrorMessage(error.error);
    });
  }

}
