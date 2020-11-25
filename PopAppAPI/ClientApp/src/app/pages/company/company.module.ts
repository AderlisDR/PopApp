import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyGridComponent } from './company-grid/company-grid.component';
import { CompanyRoutingModule } from './company-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CompanyRoutingModule
  ],
  declarations: [
    CompanyGridComponent,
    CompanyFormComponent
  ]
})
export class CompanyModule { }
