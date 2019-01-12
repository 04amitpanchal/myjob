import { TestBed, inject } from '@angular/core/testing';

import { AppliedJobService } from './applied-job.service';

describe('AppliedJobService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppliedJobService]
    });
  });

  it('should be created', inject([AppliedJobService], (service: AppliedJobService) => {
    expect(service).toBeTruthy();
  }));
});
