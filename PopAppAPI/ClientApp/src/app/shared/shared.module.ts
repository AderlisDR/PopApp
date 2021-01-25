import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import es from '@angular/common/locales/es-DO';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, MatIconModule, MatInputModule, MatRippleModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DxDataGridModule } from 'devextreme-angular';
import { en_US, NgZorroAntdModule, NZ_I18N } from 'ng-zorro-antd';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ContainerFormComponent } from '../pages/container/container-form/container-form.component';
import { ExistingContainerSelectComponent } from '../pages/container/existing-container-select/existing-container-select.component';
import { FreigthFormComponent } from '../pages/freigth/freigth-form/freigth-form.component';
import { DropdownAnchorDirective } from './directives/dropdown-anchor.directive';
import { DropdownLinkDirective } from './directives/dropdown-link.directive';
import { AppDropdownDirective } from './directives/dropdown.directive';
registerLocaleData(es);

const directives = [
  DropdownLinkDirective,
  AppDropdownDirective,
  DropdownAnchorDirective
];

const components = [
  ContainerFormComponent,
  FreigthFormComponent,
  ExistingContainerSelectComponent
];

export const MY_FORMATS = {
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
  declarations: [
    ...components,
    ...directives],
  imports: [
    CommonModule,
    MatIconModule,
    MatRippleModule,
    FlexLayoutModule,
    DxDataGridModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    MatInputModule,
    NzIconModule,
    MatDialogModule,
    MatDatepickerModule,
    DragDropModule,
    MatChipsModule,
    MatExpansionModule
  ],
  exports: [
    CommonModule,
    MatIconModule,
    MatRippleModule,
    FlexLayoutModule,
    DxDataGridModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    MatInputModule,
    NzIconModule,
    MatDialogModule,
    MatDatepickerModule,
    DragDropModule,
    MatChipsModule,
    MatExpansionModule,
    ...directives
  ],
  entryComponents: components,
  providers: [
    {
      provide: NZ_I18N,
      useValue: en_US
    },
    { provide: MAT_DATE_LOCALE, useValue: 'it' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class SharedModule { }
