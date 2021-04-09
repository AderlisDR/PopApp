import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonStatisticsDashComponent } from './common-statistics-dash/common-statistics-dash.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FreigthTypesDashComponent } from './freigth-types-dash/freigth-types-dash.component';
import { ScheduleDashComponent } from './schedule-dash/schedule-dash.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    CommonStatisticsDashComponent,
    ScheduleDashComponent,
    FreigthTypesDashComponent
  ]
})
export class DashboardModule { }
