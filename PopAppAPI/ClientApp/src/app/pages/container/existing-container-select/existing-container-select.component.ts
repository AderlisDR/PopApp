import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Container } from '../../../models/container/container';
import { ContainerService } from '../../../services/container.service';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-existing-container-select',
  templateUrl: './existing-container-select.component.html',
  styleUrls: ['./existing-container-select.component.css']
})
export class ExistingContainerSelectComponent implements OnInit {
  isLoading = true;
  addContainersDisabled = true;
  containers: Container[] = [];
  selectedContainers: number[] = [];
  dialogResponse: { containersId: number[], createNewContainer: boolean };

  constructor(private containerService: ContainerService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<ExistingContainerSelectComponent>) { }

  ngOnInit() {
    this.getContainers();
  }

  getContainers() {
    this.containerService.GetContainers().then((response: Container[]) => {
      this.containers = response;
      this.isLoading = false;
    }).catch((error: HttpErrorResponse) => {
      this.notificationService.showErrorMessage(error.error);
    });
  }

  handleSelectedContainersChange() {
    this.selectedContainers.length === 0 ? this.addContainersDisabled = true : this.addContainersDisabled = false;
  }

  addContainers() {
    this.dialogResponse = {
      containersId: this.selectedContainers,
      createNewContainer: false
    };

    this.dialogRef.close(this.dialogResponse);
  }

  createNewContainer() {
    this.dialogResponse = {
      containersId: [],
      createNewContainer: true
    };

    this.dialogRef.close(this.dialogResponse);
  }
}
