import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Freigth } from '../../../models/freigth/freigth';

@Component({
  selector: 'app-achedule-add-freigth',
  templateUrl: './achedule-add-freigth.component.html',
  styleUrls: ['./achedule-add-freigth.component.scss']
})
export class AcheduleAddFreigthComponent implements OnInit, OnChanges {
  @Input() containerId: number;
  freigths: Freigth[] = [
    { freigthId: 0, freigthCode: '123', freigthDescription: 'Carga 1', freigthType: 'Tipo 1', freigthWeigth: 5.00, containerId: 0, isActive: true },
    { freigthId: 1, freigthCode: '321', freigthDescription: 'Carga 1', freigthType: 'Tipo 2', freigthWeigth: 15.00, containerId: 1, isActive: true },
    { freigthId: 2, freigthCode: '213', freigthDescription: 'Carga 2', freigthType: 'Tipo 3', freigthWeigth: 10.00, containerId: 1, isActive: true }
  ];
  displayFreigths: Freigth[] = [];
  currentFreigth: number;
  isLoading = true;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.isLoading = true;
    if (!isNaN(this.containerId)) {
      this.currentFreigth = null;
      this.displayFreigths = this.freigths.filter(freigth => freigth.containerId === this.containerId);
      this.isLoading = false;
    }
  }

  handlePanelExpansionToggle(freigthId: number) {
    this.currentFreigth = freigthId;
  }
}
