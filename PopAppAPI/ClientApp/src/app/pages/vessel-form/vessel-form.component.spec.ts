/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VesselFormComponent } from './vessel-form.component';

describe('VesselFormComponent', () => {
  let component: VesselFormComponent;
  let fixture: ComponentFixture<VesselFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VesselFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
