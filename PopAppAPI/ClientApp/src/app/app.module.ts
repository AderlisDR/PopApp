import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material';
import { MatRippleModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { AbilityModule } from '@casl/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DxDataGridModule } from 'devextreme-angular';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { AccountLayoutComponent } from './layouts/account-layout/account-layout.component';
import { FixedNavbarComponent } from './layouts/site-layout/fixed-navbar/fixed-navbar.component';
import { SidebarMenuComponent } from './layouts/site-layout/sidebar-menu/sidebar-menu.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { StickyFooterComponent } from './layouts/site-layout/sticky-footer/sticky-footer.component';
import { CounterComponent } from './pages/counter/counter.component';
import { FetchDataComponent } from './pages/fetch-data/fetch-data.component';
import { CompanyFormComponent } from './pages/company-form/company-form.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/guards/auth.guard';
import { RoleGuard } from './services/guards/role.guard';
import { NavigationService } from './services/navigation.service';
import { TokenInterceptor } from './shared/helpers/token-interceptor';
import { SharedModule } from './shared/shared.module';
import {MatInputModule} from '@angular/material/input';
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

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    FixedNavbarComponent,
    SidebarMenuComponent,
    StickyFooterComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AccountLayoutComponent,
    LoginComponent,
    NotFoundComponent,
    CompanyFormComponent,
    ContainerFormComponent,
    FreigthFormComponent,
    ProductFormComponent,
    UserFormComponent,
    VesselFormComponent,
    CompanyGridComponent,
    ContainerGridComponent,
    DocumentGridComponent,
    FreigthGridComponent,
    ProductGridComponent,
    UserGridComponent,
    VesselGridComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatInputModule, 
    AbilityModule.forRoot(),
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    }),
    SharedModule,
    MatIconModule,
    MatRippleModule,
    FlexLayoutModule,
    DxDataGridModule
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    AuthGuard,
    RoleGuard,
    NavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
