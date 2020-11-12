import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { AbilityModule } from '@casl/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AccountLayoutComponent } from './layouts/account-layout/account-layout.component';
import { FixedNavbarComponent } from './layouts/site-layout/fixed-navbar/fixed-navbar.component';
import { SidebarMenuComponent } from './layouts/site-layout/sidebar-menu/sidebar-menu.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { StickyFooterComponent } from './layouts/site-layout/sticky-footer/sticky-footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthService } from './services/auth.service';
import { TokenInterceptor } from './shared/helpers/token-interceptor';

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
    NotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule,
    FontAwesomeModule,
    AbilityModule.forRoot(),
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
