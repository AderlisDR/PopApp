import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ContainerFormComponent } from './container-form/container-form.component';
import { ContainerGridComponent } from './container-grid/container-grid.component';
import { ContainerRoutingModule } from './container-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ContainerRoutingModule
  ],
  declarations: [
    ContainerGridComponent,
    ContainerFormComponent
  ]
})
export class ContainerModule { }
