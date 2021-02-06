import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonStatisticsComponent } from './common-statistics/common-statistics.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    CommonStatisticsComponent
  ]
})
export class DashboardModule { }
