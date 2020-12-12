import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FreigthFormComponent } from './freigth-form/freigth-form.component';
import { FreigthGridComponent } from './freigth-grid/freigth-grid.component';
import { FreigthRoutingModule } from './freigth-routing.module';

@NgModule({
  imports: [
    SharedModule,
    FreigthRoutingModule
  ],
  declarations: [
    FreigthGridComponent,
    FreigthFormComponent
  ]
})
export class FreigthModule { }
