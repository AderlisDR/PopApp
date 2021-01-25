import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FreigthGridComponent } from './freigth-grid/freigth-grid.component';
import { FreigthRoutingModule } from './freigth-routing.module';

@NgModule({
  imports: [
    SharedModule,
    FreigthRoutingModule
  ],
  declarations: [
    FreigthGridComponent

  ]
})
export class FreigthModule { }
