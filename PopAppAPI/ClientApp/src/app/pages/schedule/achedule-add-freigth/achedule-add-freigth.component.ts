import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FreigthEvaluationStatus } from '../../../enums/freigth-evaluation-status';
import { UserRole } from '../../../enums/user-role.enum';
import { Freigth } from '../../../models/freigth/freigth';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-achedule-add-freigth',
  templateUrl: './achedule-add-freigth.component.html',
  styleUrls: ['./achedule-add-freigth.component.scss']
})
export class AcheduleAddFreigthComponent implements OnInit, OnChanges {
  @Input() containerId: number;
  isAdmin = false;
  freigths: Freigth[] = [
    { freigthId: 0, freigthCode: '123', freigthDescription: 'Carga 0', freigthType: 'Tipo 1', freigthWeigth: 5.00, containerId: 0, isActive: true },
    { freigthId: 1, freigthCode: '321', freigthDescription: 'Carga 1', freigthType: 'Tipo 2', freigthWeigth: 15.00, containerId: 1, isActive: true },
    { freigthId: 2, freigthCode: '213', freigthDescription: 'Carga 2', freigthType: 'Tipo 3', freigthWeigth: 10.00, containerId: 1, isActive: true },
    { freigthId: 3, freigthCode: '132', freigthDescription: 'Carga 3', freigthType: 'Tipo 4', freigthWeigth: 20.00, containerId: 0, isActive: true }
  ];
  displayFreigths: Freigth[] = [];
  currentFreigth: number;
  evaluationStatuses = FreigthEvaluationStatus;
  isLoading = true;
  approbed = true;
  problematic = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();
    this.isAdmin = currentUser.userRole === UserRole.Admin;
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

  evaluationStatus(freigthId: number) {
    switch(freigthId) {
      case 0:
        return FreigthEvaluationStatus.Approved;
      case 1:
        return FreigthEvaluationStatus.Reported;
      case 2:
        return FreigthEvaluationStatus.Approved;
      default:
        return FreigthEvaluationStatus.None;
    }
  }
}
