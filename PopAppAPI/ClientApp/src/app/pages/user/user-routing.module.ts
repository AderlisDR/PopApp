import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../services/guards/auth.guard';
import { RoleGuard } from '../../services/guards/role.guard';
import { UserFormComponent } from './user-form/user-form.component';
import { UserGridComponent } from './user-grid/user-grid.component';

const routes: Routes = [
  {
    path: '',
    component: UserGridComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'add',
    component: UserFormComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: ':id/edit',
    component: UserFormComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: ':id/view',
    component: UserFormComponent,
    canActivate: [AuthGuard, RoleGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
