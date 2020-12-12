import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../services/guards/auth.guard';
import { RoleGuard } from '../../services/guards/role.guard';
import { FreigthFormComponent } from './freigth-form/freigth-form.component';
import { FreigthGridComponent } from './freigth-grid/freigth-grid.component';

const routes: Routes = [
  {
    path: '',
    component: FreigthGridComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'add',
    component: FreigthFormComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: ':id/edit',
    component: FreigthFormComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: ':id/view',
    component: FreigthFormComponent,
    canActivate: [AuthGuard, RoleGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreigthRoutingModule {
}
