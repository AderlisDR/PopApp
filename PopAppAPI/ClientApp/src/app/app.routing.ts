import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HomeComponent } from './home/home.component';
import { AccountLayoutComponent } from './layouts/account-layout/account-layout.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const AppRoutes = [
    {
        path: '',
        component: SiteLayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
                canActivate: []
            },
            {
                path: 'counter',
                component: CounterComponent,
                canActivate: []
            },
            {
                path: 'fetch-data',
                component: FetchDataComponent,
                canActivate: []
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