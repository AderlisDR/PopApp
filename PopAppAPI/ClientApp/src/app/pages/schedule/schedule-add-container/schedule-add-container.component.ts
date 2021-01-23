import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { UserRole } from '../../../enums/user-role.enum';
import { ScheduleContainer } from '../../../models/schedule/schedule-container';
import { Vessel } from '../../../models/vessel/vessel';
import { AuthService } from '../../../services/auth.service';
import { NotificationService } from '../../../services/notification.service';
import { ScheduleService } from '../../../services/schedule.service';
import { ContainerFormComponent } from '../../container/container-form/container-form.component';
import { ExistingContainerSelectComponent } from '../../container/existing-container-select/existing-container-select.component';
import { FreigthFormComponent } from '../../freigth/freigth-form/freigth-form.component';

@Component({
  selector: 'app-schedule-add-container',
  templateUrl: './schedule-add-container.component.html',
  styleUrls: ['./schedule-add-container.component.css']
})
export class ScheduleAddContainerComponent implements OnInit {
  currentScheduleId = 0;
  focusedRowKey = 0;
  isAdmin = false;
  isLoading: boolean;
  freigthIsLoading: boolean;
  vessel: Vessel;
  scheduleContainers: ScheduleContainer[] = [];
  selectContainerDialogResponse: { containersId: number[], addContainerFeigth: boolean, createNewContainer: boolean };

  constructor(private dialog: MatDialog,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private scheduleService: ScheduleService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.isLoading = true;
    this.currentScheduleId = +this.activatedRoute.snapshot.params['id'];
    const currentUser = this.authService.getCurrentUser();
    this.isAdmin = currentUser.userRole === UserRole.Admin || currentUser.userRole === UserRole.Master;
    this.getVessel();
  }

  getVessel() {
    this.scheduleService.GetScheduleVessel(this.currentScheduleId).then((response: Vessel) => {
      this.vessel = response;
      this.getScheduleVesselContainers();
    }).catch((error: HttpErrorResponse) => {
      this.notificationService.showErrorMessage(error.error);
    });
  }

  getScheduleVesselContainers() {
    this.scheduleService.GetScheduleVesselContainers(this.currentScheduleId).then((response: ScheduleContainer[]) => {
      this.scheduleContainers = response;
      this.focusedRowKey = response.length > 0 ? response[response.length - 1].id : 0;
      this.isLoading = false
    }).catch((error: HttpErrorResponse) => {
      this.notificationService.showErrorMessage(error.error);
    });
  }

  onFocusedRowChanging(e) {
    const rowsCount = e.component.getVisibleRows().length,
      pageCount = e.component.pageCount(),
      pageIndex = e.component.pageIndex(),
      key = e.event && e.event.key;

    if (key && e.prevRowIndex === e.newRowIndex) {
      if (e.newRowIndex === rowsCount - 1 && pageIndex < pageCount - 1) {
        e.component.pageIndex(pageIndex + 1).done(function () {
          e.component.option('focusedRowIndex', 0);
        });
      } else if (e.newRowIndex === 0 && pageIndex > 0) {
        e.component.pageIndex(pageIndex - 1).done(function () {
          e.component.option('focusedRowIndex', rowsCount - 1);
        });
      }
    }
  }

  openSelectContainerDialog() {
    const dialogRef = this.dialog.open(ExistingContainerSelectComponent, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe((result: { containersId: number[], createNewContainer: boolean }) => {
      if (result && result.createNewContainer) {
        this.openNewContainerDialog();
      } else if (result && !result.createNewContainer) {
        const request = {
          scheduleId: this.currentScheduleId,
          containersId: result.containersId
        }

        this.scheduleService.AddMultipleContainersToScheduleVessel(request).then(() => {
          this.isLoading = true;
          this.getScheduleVesselContainers();
        }).catch((error: HttpErrorResponse) => {
          this.notificationService.showErrorMessage(error.error);
        });
      }
    });
  }

  openNewContainerDialog() {
    const dialogRef = this.dialog.open(ContainerFormComponent, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe((result: number) => {
      if (result) {
        this.addNewContainerToScheduleVessel(result);
      }
    });
  }

  addNewContainerToScheduleVessel(containerId: number) {
    this.isLoading = true;
    this.scheduleService.AddContainerToScheduleVessel(this.currentScheduleId, containerId).then(() => {
      this.getScheduleVesselContainers();
    }).catch((error: HttpErrorResponse) => {
      this.notificationService.showErrorMessage(error.error);
    });
  }

  openFreigthDialog() {
    const dialogRef = this.dialog.open(FreigthFormComponent, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe((result: number) => {
      if (result) {
        this.freigthIsLoading = true;
        const request = {
          scheduleVesselContainerId: this.focusedRowKey,
          freigthId: result
        };
        this.focusedRowKey = 0;

        this.scheduleService.AddFreigthToScheduleVesselContainer(request).then(() => {
          this.focusedRowKey = request.scheduleVesselContainerId;
          this.freigthIsLoading = false;
        }).catch((error: HttpErrorResponse) => {
          this.freigthIsLoading = false;
          this.notificationService.showErrorMessage(error.error);
        });
      }
    });
  }
}
