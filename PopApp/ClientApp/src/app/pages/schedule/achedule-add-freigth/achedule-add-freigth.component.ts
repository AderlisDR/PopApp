import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FreigthEvaluationStatus } from '../../../enums/freigth-evaluation-status';
import { UserRole } from '../../../enums/user-role.enum';
import { ScheduleContainerFreigth } from '../../../models/schedule/schedule-container-freigth';
import { AuthService } from '../../../services/auth.service';
import { NotificationService } from '../../../services/notification.service';
import { ScheduleService } from '../../../services/schedule.service';

@Component({
  selector: 'app-achedule-add-freigth',
  templateUrl: './achedule-add-freigth.component.html',
  styleUrls: ['./achedule-add-freigth.component.scss']
})
export class AcheduleAddFreigthComponent implements OnInit, OnChanges {
  @Input() containerId: number;
  isAdmin = false;
  isUser = false;
  scheduleContainerFreigths: ScheduleContainerFreigth[] = [];
  currentFreigth: number;
  evaluationStatuses = FreigthEvaluationStatus;
  isLoading = true;

  constructor(private authService: AuthService,
    private scheduleService: ScheduleService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();
    this.isAdmin = currentUser.userRole === UserRole.Admin || currentUser.userRole === UserRole.Master;
    this.isUser = currentUser.userRole === UserRole.User;
  }

  ngOnChanges() {
    this.isLoading = true;
    if (!isNaN(this.containerId)) {
      this.currentFreigth = null;
      this.getScheduleContainerFreigths();
    }
  }

  getScheduleContainerFreigths() {
    this.scheduleService.GetScheduleContainerFreigths(this.containerId).then((response: ScheduleContainerFreigth[]) => {
      this.scheduleContainerFreigths = response;
      this.isLoading = false;
    }).catch((error: HttpErrorResponse) => {
      this.isLoading = false;
      this.notificationService.showErrorMessage(error.error);
    });
  }

  handlePanelExpansionToggle(freigthId: number) {
    this.currentFreigth = freigthId;
  }

  approveFreigth(scheduleContainerFreigthId: number) {
    Swal.fire({
      title: '¿Seguro que desea aprobar esta carga?',
      text: "Estos cambios no podrán ser reversados...",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#218838',
      confirmButtonText: 'Aprobar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.notificationService.showLoading();
        this.scheduleService.ApproveScheduleContainerFreigth(scheduleContainerFreigthId).then(() => {
          this.updateScheduleContainerFreigthEvaluationStatus(scheduleContainerFreigthId, FreigthEvaluationStatus.Approved);
          this.notificationService.showSuccessMessage('La carga ha sido aprobada con éxito.');
        }).catch((error: HttpErrorResponse) => {
          this.notificationService.showErrorMessage(error.error);
        });
      }
    });
  }

  async reportFreigth(scheduleContainerFreigthId: number) {
    await Swal.fire({
      title: '¿Seguro que desea reportar esta carga?',
      text: "Estos cambios no pueden ser reversados",
      input: 'textarea',
      inputPlaceholder: 'Escriba porqué está reportando esta carga...',
      showCancelButton: true,
      confirmButtonColor: '#c82333',
      confirmButtonText: 'Reportar',
      cancelButtonText: 'Cancelar',
      inputValidator: (value) => {
        if (!value) {
          return 'Es requerido que especifique la razón por la cual desea reportar esta carga.';
        }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        if (result.value) {
          this.notificationService.showLoading();
          const request: { scheduleContainerFreigthId: number, message: string } = {
            scheduleContainerFreigthId: scheduleContainerFreigthId,
            message: result.value
          };

          this.scheduleService.ReportScheduleContainerFreigth(request).then(() => {
            this.updateScheduleContainerFreigthEvaluationStatus(scheduleContainerFreigthId, FreigthEvaluationStatus.Reported);
            this.notificationService.showSuccessMessage('La carga ha sido reportada con éxito.');
          }).catch((error: HttpErrorResponse) => {
            this.notificationService.showErrorMessage(error.error);
          });
        }
      }
    });
  }

  updateScheduleContainerFreigthEvaluationStatus(scheduleContainerFreigthId: number, status: FreigthEvaluationStatus) {
    this.scheduleContainerFreigths.forEach(containerFreigth => {
      if (containerFreigth.id === scheduleContainerFreigthId) {
        containerFreigth.evaluationStatus = status;
      }
    });
  }
}
