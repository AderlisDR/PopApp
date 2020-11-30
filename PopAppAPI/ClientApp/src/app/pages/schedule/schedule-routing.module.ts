import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../services/guards/auth.guard';
import { RoleGuard } from '../../services/guards/role.guard';
import { ScheduleAddContainerComponent } from './schedule-add-container/schedule-add-container.component';
import { ScheduleConsultComponent } from './schedule-consult/schedule-consult.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleConsultComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: ':id/containers',
    component: ScheduleAddContainerComponent,
    canActivate: [AuthGuard, RoleGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule {
}
