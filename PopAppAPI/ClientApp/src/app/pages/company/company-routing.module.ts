import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../services/guards/auth.guard';
import { RoleGuard } from '../../services/guards/role.guard';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyGridComponent } from './company-grid/company-grid.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyGridComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'add',
    component: CompanyFormComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: ':id/edit',
    component: CompanyFormComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: ':id/view',
    component: CompanyFormComponent,
    canActivate: [AuthGuard, RoleGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule {
}
