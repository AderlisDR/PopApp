import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { VesselFormComponent } from './vessel-form/vessel-form.component';
import { VesselGridComponent } from './vessel-grid/vessel-grid.component';
import { VesselRoutingModule } from './vessel-routing.module';

@NgModule({
  imports: [
    SharedModule,
    VesselRoutingModule
  ],
  declarations: [
    VesselGridComponent,
    VesselFormComponent
  ]
})
export class VesselModule { }
