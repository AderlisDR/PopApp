import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Container } from '../../../models/container/container';
import { ContainerService } from '../../../services/container.service';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-container-form',
  templateUrl: './container-form.component.html',
  styleUrls: ['./container-form.component.scss'],
})
export class ContainerFormComponent implements OnInit {
  containerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private containerService: ContainerService,
    public dialogRef: MatDialogRef<ContainerFormComponent>,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.containerForm = this.formBuilder.group({
      containerType: ['', [Validators.required]],
      containerPayload: [0, [Validators.required]],
      containerCapacity: [0, [Validators.required]],
      containerLenth: [0, [Validators.required]],
      containerWidth: [0, [Validators.required]],
      containerHeigth: [0, [Validators.required]]
    });
  }

  createContainer() {
    const container: Container = {
      containerType: this.containerForm.controls.containerType.value,
      containerPayload: this.containerForm.controls.containerPayload.value,
      containerCapacity: this.containerForm.controls.containerCapacity.value,
      containerLenth: this.containerForm.controls.containerLenth.value,
      containerWidth: this.containerForm.controls.containerWidth.value,
      containerHeigth: this.containerForm.controls.containerHeigth.value,
    };

    this.notificationService.showLoading();
    this.containerService.PostContainer(container).then((response: number) => {
      this.notificationService.showSuccessMessage('Contenedor guardado con éxito');
      this.containerForm.reset();
      this.dialogRef.close(response);
    }).catch((error: HttpErrorResponse) => {
      this.notificationService.showErrorMessage(error.error);
    });
  }
}
