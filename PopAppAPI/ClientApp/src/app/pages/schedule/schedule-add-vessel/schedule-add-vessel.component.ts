import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as differenceInCalendarDays from 'date-fns/difference_in_calendar_days';
import Swal from 'sweetalert2';
import { VesselCombo } from '../../../models/vessel/vessel-combo';
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
    private vesselService: VesselService) { }

  ngOnInit() {
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
      date: [null, Validators.required]
    });
  }

  handleSelectChange() {
    this.showVesselRequiredError = false;
  }

  disabledDate = (current: Date): boolean => {
    return differenceInCalendarDays(current, this.today) < 0;
  }

  handleDateChange(selectedDate: Date) {
    //
  }

  onSubmit() {

  }

}
