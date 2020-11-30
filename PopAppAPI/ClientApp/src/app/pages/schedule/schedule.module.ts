import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { AcheduleAddFreigthComponent } from './achedule-add-freigth/achedule-add-freigth.component';
import { ScheduleAddContainerComponent } from './schedule-add-container/schedule-add-container.component';
import { ScheduleAddProductComponent } from './schedule-add-product/schedule-add-product.component';
import { ScheduleAddVesselComponent } from './schedule-add-vessel/schedule-add-vessel.component';
import { ScheduleConsultComponent } from './schedule-consult/schedule-consult.component';
import { ScheduleRoutingModule } from './schedule-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ScheduleRoutingModule
  ],
  declarations: [
    ScheduleConsultComponent,
    ScheduleAddVesselComponent,
    ScheduleAddContainerComponent,
    AcheduleAddFreigthComponent,
    ScheduleAddProductComponent
  ],
  entryComponents: [
    ScheduleAddVesselComponent
  ]
})
export class ScheduleModule { }
