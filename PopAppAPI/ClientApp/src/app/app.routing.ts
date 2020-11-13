import { AccountLayoutComponent } from './layouts/account-layout/account-layout.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { CounterComponent } from './pages/counter/counter.component';
import { FetchDataComponent } from './pages/fetch-data/fetch-data.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './services/guards/auth.guard';
import { RoleGuard } from './services/guards/role.guard';

export const AppRoutes = [
    {
        path: '',
        component: SiteLayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'counter',
                component: CounterComponent,
                canActivate: [AuthGuard, RoleGuard]
            },
            {
                path: 'fetch-data',
                component: FetchDataComponent,
                canActivate: [AuthGuard, RoleGuard]
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
