import { AccountLayoutComponent } from './layouts/account-layout/account-layout.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { CounterComponent } from './pages/counter/counter.component';
import { FetchDataComponent } from './pages/fetch-data/fetch-data.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './services/guards/auth.guard';
import { RoleGuard } from './services/guards/role.guard';
import { CompanyFormComponent } from './pages/company-form/company-form.component';
import { ContainerFormComponent } from './pages/container-form/container-form.component';
import { FreigthFormComponent } from './pages/freigth-form/freigth-form.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { VesselFormComponent } from './pages/vessel-form/vessel-form.component';
import { CompanyGridComponent } from './pages/company-grid/company-grid.component';
import { ContainerGridComponent } from './pages/container-grid/container-grid.component';
import { DocumentGridComponent } from './pages/document-grid/document-grid.component';
import { FreigthGridComponent } from './pages/freigth-grid/freigth-grid.component';
import { ProductGridComponent } from './pages/product-grid/product-grid.component';
import { UserGridComponent } from './pages/user-grid/user-grid.component';
import { VesselGridComponent } from './pages/vessel-grid/vessel-grid.component';

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
            },
            {
                path: 'company-grid',
                component: CompanyGridComponent,
                canActive: []
            },
            {
                path: 'container-grid',
                component: ContainerGridComponent,
                canActive: []
            },
            {
                path: 'document-grid',
                component: DocumentGridComponent,
                canActive: []
            },
            {
                path: 'freigth-grid',
                component: FreigthGridComponent,
                canActive: []
            },
            {
                path: 'product-grid',
                component: ProductGridComponent,
                canActive: []
            },
            {
                path: 'user-grid',
                component: UserGridComponent,
                canActive: []
            },
            {
                path: 'vessel-grid',
                component: VesselGridComponent,
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
