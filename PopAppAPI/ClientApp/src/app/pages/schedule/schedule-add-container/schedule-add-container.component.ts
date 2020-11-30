import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Container } from '../../../models/container/container';
import { ContainerFormComponent } from '../../container/container-form/container-form.component';
import { FreigthFormComponent } from '../../freigth/freigth-form/freigth-form.component';

@Component({
  selector: 'app-schedule-add-container',
  templateUrl: './schedule-add-container.component.html',
  styleUrls: ['./schedule-add-container.component.css']
})
export class ScheduleAddContainerComponent implements OnInit {
  vesselName = 'Paparipo';
  focusedRowKey = 0;
  containers: Container[] = [
    { containerId: 0, containerType: 'Un tipo', containerPayload: 1, containerCapacity: 2, containerLenth: 3, containerWidth: 4, containerHeigth: 5 },
    { containerId: 1, containerType: 'Otro tipo', containerPayload: 2, containerCapacity: 3, containerLenth: 4, containerWidth: 5, containerHeigth: 6 }
  ];
  groupPanelTexts = {
    groupByThisColumn: 'Agrupar por esta columna',
    groupContinuedMessage: 'Continuación desde la página anterior',
    groupContinuesMessage: 'Continúa en la siguiente página'
  };

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
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

  onFocusedRowChanged(e) {
    const rowData = e.row && e.row.data;

    if (rowData) {
      // TO DO
    }
  }

  onExport() {
    // TO DO
  }

  openContainerDialog(): void {
    const dialogRef = this.dialog.open(ContainerFormComponent, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openFreigthDialog(): void {
    const dialogRef = this.dialog.open(FreigthFormComponent, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
