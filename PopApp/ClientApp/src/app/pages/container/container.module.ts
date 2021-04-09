import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ContainerGridComponent } from './container-grid/container-grid.component';
import { ContainerRoutingModule } from './container-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ContainerRoutingModule
  ],
  declarations: [
    ContainerGridComponent
  ]
})
export class ContainerModule { }
