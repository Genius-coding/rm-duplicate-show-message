import { TestBed } from '@angular/core/testing';

import { ActivatedServiceService } from './activated-service.service';

describe('ActivatedServiceService', () => {
  let service: ActivatedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivatedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
