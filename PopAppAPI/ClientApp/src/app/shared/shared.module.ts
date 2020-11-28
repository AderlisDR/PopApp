import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatInputModule, MatRippleModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DxDataGridModule } from 'devextreme-angular';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { DropdownAnchorDirective } from './directives/dropdown-anchor.directive';
import { DropdownLinkDirective } from './directives/dropdown-link.directive';
import { AppDropdownDirective } from './directives/dropdown.directive';

const directives = [
  DropdownLinkDirective,
  AppDropdownDirective,
  DropdownAnchorDirective
];

@NgModule({
  declarations: directives,
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
    NzIconModule
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
    ...directives
  ]
})
export class SharedModule { }
