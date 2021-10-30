import { TestBed } from '@angular/core/testing';

import { CreatUserService } from './creat-user.service';

describe('CreatUserService', () => {
  let service: CreatUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
