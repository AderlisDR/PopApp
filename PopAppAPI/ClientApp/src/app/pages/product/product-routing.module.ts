import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../services/guards/auth.guard';
import { RoleGuard } from '../../services/guards/role.guard';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductGridComponent } from './product-grid/product-grid.component';

const routes: Routes = [
  {
    path: '',
    component: ProductGridComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'add',
    component: ProductFormComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: ':id/edit',
    component: ProductFormComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: ':id/view',
    component: ProductFormComponent,
    canActivate: [AuthGuard, RoleGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
