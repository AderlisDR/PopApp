import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductGridComponent,
    ProductFormComponent
  ]
})
export class ProductModule { }
