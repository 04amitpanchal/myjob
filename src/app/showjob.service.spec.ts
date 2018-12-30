import { TestBed, inject } from '@angular/core/testing';

import { ShowjobService } from './showjob.service';

describe('ShowjobService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowjobService]
    });
  });

  it('should be created', inject([ShowjobService], (service: ShowjobService) => {
    expect(service).toBeTruthy();
  }));
});
