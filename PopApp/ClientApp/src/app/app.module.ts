import { CommonModule, registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es-DO';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { Ability, PureAbility } from '@casl/ability';
import { AbilityModule } from '@casl/angular';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountLayoutComponent } from './layouts/account-layout/account-layout.component';
import { FixedNavbarComponent } from './layouts/site-layout/fixed-navbar/fixed-navbar.component';
import { SidebarMenuComponent } from './layouts/site-layout/sidebar-menu/sidebar-menu.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { StickyFooterComponent } from './layouts/site-layout/sticky-footer/sticky-footer.component';
import { AuthGuard } from './services/guards/auth.guard';
import { RoleGuard } from './services/guards/role.guard';
import { SharedModule } from './shared/shared.module';

registerLocaleData(es);

const components = [
  AppComponent,
  SiteLayoutComponent,
  FixedNavbarComponent,
  SidebarMenuComponent,
  StickyFooterComponent,
  AccountLayoutComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    BrowserAnimationsModule,
    AbilityModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token')
      }
    }),
    SharedModule
  ],
  providers: [
    AuthGuard,
    RoleGuard,
    { provide: Ability, useValue: new Ability() },
    { provide: PureAbility, useExisting: Ability },
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
