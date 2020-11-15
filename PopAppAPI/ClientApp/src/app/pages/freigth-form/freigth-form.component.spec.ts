/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FreigthFormComponent } from './freigth-form.component';

describe('FreigthFormComponent', () => {
  let component: FreigthFormComponent;
  let fixture: ComponentFixture<FreigthFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreigthFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreigthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
