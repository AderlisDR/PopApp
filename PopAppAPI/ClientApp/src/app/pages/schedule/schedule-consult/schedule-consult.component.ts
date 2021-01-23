import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import * as differenceInCalendarDays from 'date-fns/difference_in_calendar_days';
import { UserRole } from '../../../enums/user-role.enum';
import { Schedule } from '../../../models/schedule/schedule';
import { AuthService } from '../../../services/auth.service';
import { NotificationService } from '../../../services/notification.service';
import { ScheduleService } from '../../../services/schedule.service';
import { ScheduleAddVesselComponent } from '../schedule-add-vessel/schedule-add-vessel.component';

@Component({
  selector: 'app-schedule-consult',
  templateUrl: './schedule-consult.component.html',
  styleUrls: ['./schedule-consult.component.css']
})
export class ScheduleConsultComponent implements OnInit {
  isAdmin = false;
  isUser = false;
  isLoading = true;
  today = new Date();
  date = new FormControl(this.today);
  schedules: Schedule[] = [];
  groupPanelTexts = {
    groupByThisColumn: 'Agrupar por esta columna',
    groupContinuedMessage: 'Continuación desde la página anterior',
    groupContinuesMessage: 'Continúa en la siguiente página'
  };

  constructor(private dialog: MatDialog,
    private authService: AuthService,
    private scheduleService: ScheduleService,
    private norificationService: NotificationService) { }

  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();
    this.isAdmin = currentUser.userRole === UserRole.Admin || currentUser.userRole === UserRole.Master;
    this.isUser = currentUser.userRole === UserRole.User;
    this.getSchedules();
  }

  getSchedules() {
    this.scheduleService.GetSchedules().then((response: Schedule[]) => {
      this.schedules = response;
      this.isLoading = false;
    }).catch((error: HttpErrorResponse) => {
      this.isLoading = false;
      this.norificationService.showErrorMessage(error.error);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ScheduleAddVesselComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.isLoading = true;
      this.getSchedules();
    });
  }
  
  disabledDate = (current: Date): boolean => {
    return differenceInCalendarDays(current, this.today) < 0;
  }
  
  handleDateChange(selectedDate: Date) {
    //
  }
}
