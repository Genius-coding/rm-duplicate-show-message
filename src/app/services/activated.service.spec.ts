import { TestBed } from '@angular/core/testing';

import { ActivatedService } from './activated.service';

describe('ActivatedService', () => {
  let service: ActivatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
