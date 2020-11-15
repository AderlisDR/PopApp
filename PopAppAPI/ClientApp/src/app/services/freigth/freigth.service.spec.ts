/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FreigthService } from './freigth.service';

describe('Service: Freigth', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FreigthService]
    });
  });

  it('should ...', inject([FreigthService], (service: FreigthService) => {
    expect(service).toBeTruthy();
  }));
});
