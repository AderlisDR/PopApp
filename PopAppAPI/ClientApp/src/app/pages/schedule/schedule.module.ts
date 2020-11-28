import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { ScheduleAddContainerComponent } from './schedule-add-container/schedule-add-container.component';
import { ScheduleAddComponent } from './schedule-add/schedule-add.component';
import { ScheduleConsultComponent } from './schedule-consult/schedule-consult.component';
import { ScheduleRoutingModule } from './schedule-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ScheduleRoutingModule
  ],
  declarations: [
    ScheduleConsultComponent,
    ScheduleAddComponent,
    ScheduleAddContainerComponent
  ]
})
export class ScheduleModule { }
