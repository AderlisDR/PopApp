import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as differenceInCalendarDays from 'date-fns/difference_in_calendar_days';
import Swal from 'sweetalert2';
import { Schedule } from '../../../models/schedule/schedule';
import { VesselCombo } from '../../../models/vessel/vessel-combo';
import { NotificationService } from '../../../services/notification.service';
import { ScheduleService } from '../../../services/schedule.service';
import { VesselService } from '../../../services/vessel.service';

@Component({
  selector: 'app-schedule-add-vessel',
  templateUrl: './schedule-add-vessel.component.html',
  styleUrls: ['./schedule-add-vessel.component.css']
})
export class ScheduleAddVesselComponent implements OnInit {
  scheduleVesselForm: FormGroup;
  vessels: VesselCombo[] = [];
  today = new Date();
  showVesselRequiredError: boolean;

  constructor(private formBuilder: FormBuilder,
    private vesselService: VesselService,
    private scheduleService: ScheduleService,
    private norificationService: NotificationService) { }

  ngOnInit() {
    this.getVesselCombo();
    this.buildForm();
  }

  getVesselCombo() {
    this.vesselService.GetVesselCombo().then((response: VesselCombo[]) => {
      this.vessels = [...response];
    }).catch((error: HttpErrorResponse) => {
      Swal.fire({
        icon: 'error',
        text: error.error
      });
    });
  }

  buildForm() {
    this.scheduleVesselForm = this.formBuilder.group({
      vesselId: [Validators.required],
      date: [new Date(), Validators.required]
    });
  }

  handleSelectChange() {
    this.showVesselRequiredError = false;
  }

  disabledDate = (current: Date): boolean => {
    return differenceInCalendarDays(current, this.today) < 0;
  }

  onSubmit() {
    this.norificationService.showLoading();
    const scheduleVesselRequest: Schedule = {
      vesselId: this.scheduleVesselForm.controls.vesselId.value,
      scheduleDate: this.scheduleVesselForm.controls.date.value
    };

    this.scheduleService.PostSchedule(scheduleVesselRequest).then(() => {
      this.scheduleVesselForm.reset();
      this.norificationService.showSuccessMessage('Buque agendado con éxito');
    }).catch((error: HttpErrorResponse) => {
      this.norificationService.showErrorMessage(error.error);
    });
  }
}
