import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Container } from '../../../models/container/container';
import { ContainerService } from '../../../services/container.service';

@Component({
  selector: 'app-container-form',
  templateUrl: './container-form.component.html',
  styleUrls: ['./container-form.component.scss'],
})
export class ContainerFormComponent implements OnInit {
  containerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private containerService: ContainerService) { }

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
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Save!'
    }).then((result) => {
      if (result.isConfirmed) {
        const container: Container = {
          containerType: this.containerForm.controls.containerType.value,
          containerPayload: this.containerForm.controls.containerPayload.value,
          containerCapacity: this.containerForm.controls.containerCapacity.value,
          containerLenth: this.containerForm.controls.containerLenth.value,
          containerWidth: this.containerForm.controls.containerWidth.value,
          containerHeigth: this.containerForm.controls.containerHeigth.value,
        };

        this.containerService.PostContainer(container).then(() => {
          this.containerForm.reset();

          Swal.fire(
            'Complete!',
            'Your file has been Saved.',
            'success'
          );
        }).catch((error: HttpErrorResponse) => {
          Swal.fire(
            'Error!',
            error.error,
            'error'
          );
        });
      }
    });
  }
}
