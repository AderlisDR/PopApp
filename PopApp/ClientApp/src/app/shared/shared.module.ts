import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import es from '@angular/common/locales/es-DO';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DxChartModule, DxDataGridModule, DxPieChartModule, DxSelectBoxModule } from 'devextreme-angular';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { ContainerFormComponent } from '../pages/container/container-form/container-form.component';
import { ExistingContainerSelectComponent } from '../pages/container/existing-container-select/existing-container-select.component';
import { FreigthFormComponent } from '../pages/freigth/freigth-form/freigth-form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DropdownAnchorDirective } from './directives/dropdown-anchor.directive';
import { DropdownLinkDirective } from './directives/dropdown-link.directive';
import { AppDropdownDirective } from './directives/dropdown.directive';

registerLocaleData(es);

const DIRECTIVES = [
  DropdownLinkDirective,
  AppDropdownDirective,
  DropdownAnchorDirective
];

const COMPONENTS = [
  HomeComponent,
  NotFoundComponent,
  LoginComponent
];

const DIALOG_COMPONENTS = [
  ContainerFormComponent,
  FreigthFormComponent,
  ExistingContainerSelectComponent
];

const IMPORTS_EXPORTS = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  FlexLayoutModule,
  DragDropModule,
  FontAwesomeModule,
  DxDataGridModule,
  DxChartModule,
  DxSelectBoxModule,
  DxPieChartModule,
  NzIconModule,
  NzSkeletonModule,
  NzUploadModule,
  NzDatePickerModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule
];

const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MM YYYY',
  },
};

@NgModule({
  imports: [...IMPORTS_EXPORTS],
  exports: [...DIRECTIVES, ...COMPONENTS, ...IMPORTS_EXPORTS, ...DIALOG_COMPONENTS],
  declarations: [...DIRECTIVES, ...COMPONENTS, ...DIALOG_COMPONENTS],
  entryComponents: [...DIALOG_COMPONENTS],
  providers: [
    {
      provide: NZ_I18N,
      useValue: en_US
    },
    { provide: MAT_DATE_LOCALE, useValue: 'it' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class SharedModule { }
