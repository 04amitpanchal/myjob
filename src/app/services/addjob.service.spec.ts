import { TestBed, inject } from '@angular/core/testing';

import { AddjobService } from './addjob.service';

describe('AddjobService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddjobService]
    });
  });

  it('should be created', inject([AddjobService], (service: AddjobService) => {
    expect(service).toBeTruthy();
  }));
});
