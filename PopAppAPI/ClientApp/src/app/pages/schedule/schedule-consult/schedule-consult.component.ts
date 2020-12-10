import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserRole } from '../../../enums/user-role.enum';
import { Schedule } from '../../../models/schedule/schedule';
import { AuthService } from '../../../services/auth.service';
import { ScheduleAddVesselComponent } from '../schedule-add-vessel/schedule-add-vessel.component';
import * as differenceInCalendarDays from 'date-fns/difference_in_calendar_days';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-schedule-consult',
  templateUrl: './schedule-consult.component.html',
  styleUrls: ['./schedule-consult.component.css']
})
export class ScheduleConsultComponent implements OnInit {
  isAdmin = false;
  isUser = false;
  today = new Date();
  date = new FormControl(this.today);
  schedules: Schedule[] = [
    { scheduleDate: new Date(), vesselId: 1, createdAt: new Date() }
  ];
  groupPanelTexts = {
    groupByThisColumn: 'Agrupar por esta columna',
    groupContinuedMessage: 'Continuación desde la página anterior',
    groupContinuesMessage: 'Continúa en la siguiente página'
  };

  constructor(private dialog: MatDialog,
    private authService: AuthService) { }

  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();
    this.isAdmin = currentUser.userRole === UserRole.Admin;
    this.isUser = currentUser.userRole === UserRole.User;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ScheduleAddVesselComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onExport() {
    // TO DO
  }
  
  disabledDate = (current: Date): boolean => {
    return differenceInCalendarDays(current, this.today) < 0;
  }
  
  handleDateChange(selectedDate: Date) {
    //
  }
}
