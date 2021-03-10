import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonStatistics } from '../../../models/dashboard/common-statistics';
import { DashboardService } from '../../../services/dashboard.service';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-common-statistics-dash',
  templateUrl: './common-statistics-dash.component.html',
  styleUrls: ['./common-statistics-dash.component.scss']
})
export class CommonStatisticsDashComponent implements OnInit {
  isLoading = true;
  panelOpenState = true;
  statistics: CommonStatistics;

  constructor(private dashService: DashboardService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.getStatistics();
  }

  getStatistics() {
    this.dashService.GetCommonStatistics().then((response: CommonStatistics) => {
      this.statistics = response;
      this.isLoading = false;
    }).catch((error: HttpErrorResponse) => {
      this.notificationService.showErrorMessage(error.error);
    });
  }

}
