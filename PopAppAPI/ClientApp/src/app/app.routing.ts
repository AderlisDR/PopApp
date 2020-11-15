import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HomeComponent } from './pages/home/home.component';
import { AccountLayoutComponent } from './layouts/account-layout/account-layout.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CompanyFormComponent } from './pages/company-form/company-form.component';
import { ContainerFormComponent } from './pages/container-form/container-form.component';
import { FreigthFormComponent } from './pages/freigth-form/freigth-form.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { VesselFormComponent } from './pages/vessel-form/vessel-form.component';

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
            },
            {
                path: 'company',
                component: CompanyFormComponent,
                canActive: []
            },
            {
                path: 'container',
                component: ContainerFormComponent,
                canActive: []
            },
            {
                path: 'freigth',
                component: FreigthFormComponent,
                canActive: []
            },
            {
                path: 'product',
                component: ProductFormComponent,
                canActive: []
            },
            {
                path: 'user',
                component: UserFormComponent,
                canActive: []
            },
            {
                path: 'vessel',
                component: VesselFormComponent,
                canActive: []
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
