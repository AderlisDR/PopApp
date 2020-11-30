import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Schedule } from '../../../models/schedule/schedule';
import { ScheduleAddVesselComponent } from '../schedule-add-vessel/schedule-add-vessel.component';

@Component({
  selector: 'app-schedule-consult',
  templateUrl: './schedule-consult.component.html',
  styleUrls: ['./schedule-consult.component.css']
})
export class ScheduleConsultComponent implements OnInit {
  schedules: Schedule[] = [
    { scheduleDate: new Date(), vesselId: 1, createdAt: new Date() }
  ];
  groupPanelTexts = {
    groupByThisColumn: 'Agrupar por esta columna',
    groupContinuedMessage: 'Continuación desde la página anterior',
    groupContinuesMessage: 'Continúa en la siguiente página'
  };

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
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
}
