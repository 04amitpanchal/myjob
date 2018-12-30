import { TestBed, inject } from '@angular/core/testing';

import { UpdatejobService } from './updatejob.service';

describe('UpdatejobService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdatejobService]
    });
  });

  it('should be created', inject([UpdatejobService], (service: UpdatejobService) => {
    expect(service).toBeTruthy();
  }));
});
