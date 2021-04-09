import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Freigth } from '../../../models/freigth/freigth';
import { FreigthService } from '../../../services/freigth.service';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-freigth-form',
  templateUrl: './freigth-form.component.html',
  styleUrls: ['./freigth-form.component.scss']
})
export class FreigthFormComponent implements OnInit {
  freigthForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private freigthService: FreigthService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<FreigthFormComponent>) { }

  ngOnInit() {
    this.formBuild();
  }

  private formBuild() {
    this.freigthForm = this.formBuilder.group({
      freigthCode: ['', [Validators.required]],
      freigthDescription: ['', [Validators.required]],
      freigthType: ['', [Validators.required]],
      freigthWeigth: ['', [Validators.required]]
    });
  }

  createFreigth() {
    const freigth: Freigth = {
      freigthCode: this.freigthForm.controls.freigthCode.value,
      freigthDescription: this.freigthForm.controls.freigthDescription.value,
      freigthType: this.freigthForm.controls.freigthType.value,
      freigthWeigth: parseFloat(this.freigthForm.controls.freigthWeigth.value),
    };

    this.freigthService.PostFreigth(freigth).then((response: number) => {
      this.notificationService.showSuccessMessage('Carga guardada con éxito');
      this.freigthForm.reset();
      this.dialogRef.close(response);
    }).catch((error: HttpErrorResponse) => {
      this.notificationService.showErrorMessage(error.error);
    });
  }
}