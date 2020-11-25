import { Routes } from '@angular/router';
import { AccountLayoutComponent } from './layouts/account-layout/account-layout.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './services/guards/auth.guard';
import { RoleGuard } from './services/guards/role.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'company',
        canActivate: [AuthGuard, RoleGuard],
        loadChildren: () => import('./pages/company/company.module').then(module => module.CompanyModule)
      },
      {
        path: 'container',
        canActivate: [AuthGuard, RoleGuard],
        loadChildren: () => import('./pages/container/container.module').then(module => module.ContainerModule)
      },
      {
        path: 'dashboard',
        canActivate: [AuthGuard, RoleGuard],
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(module => module.DashboardModule)
      },
      {
        path: 'document',
        canActivate: [AuthGuard, RoleGuard],
        loadChildren: () => import('./pages/document/document.module').then(module => module.DocumentModule)
      },
      {
        path: 'freigth',
        canActivate: [AuthGuard, RoleGuard],
        loadChildren: () => import('./pages/freigth/freigth.module').then(module => module.FreigthModule)
      },
      {
        path: 'product',
        canActivate: [AuthGuard, RoleGuard],
        loadChildren: () => import('./pages/product/product.module').then(module => module.ProductModule)
      },
      {
        path: 'user',
        canActivate: [AuthGuard, RoleGuard],
        loadChildren: () => import('./pages/user/user.module').then(module => module.UserModule)
      },
      {
        path: 'vessel',
        canActivate: [AuthGuard, RoleGuard],
        loadChildren: () => import('./pages/vessel/vessel.module').then(module => module.VesselModule)
      }
    ]
  },
  {
    path: '',
    component: AccountLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
