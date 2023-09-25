import { TestBed } from '@angular/core/testing';

import { PaidcourselistService } from './paidcourselist.service';

describe('PaidcourselistService', () => {
  let service: PaidcourselistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaidcourselistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
