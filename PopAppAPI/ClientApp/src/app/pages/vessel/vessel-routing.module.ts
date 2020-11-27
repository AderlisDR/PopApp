import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../services/guards/auth.guard';
import { RoleGuard } from '../../services/guards/role.guard';
import { VesselFormComponent } from './vessel-form/vessel-form.component';
import { VesselGridComponent } from './vessel-grid/vessel-grid.component';

const routes: Routes = [
  {
    path: '',
    component: VesselGridComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'add',
    component: VesselFormComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: ':id/edit',
    component: VesselFormComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: ':id/view',
    component: VesselFormComponent,
    canActivate: [AuthGuard, RoleGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VesselRoutingModule {
}
