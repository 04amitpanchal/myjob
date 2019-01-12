import { TestBed, inject } from '@angular/core/testing';

import { AdminverifyService } from './adminverify.service';

describe('AdminverifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminverifyService]
    });
  });

  it('should be created', inject([AdminverifyService], (service: AdminverifyService) => {
    expect(service).toBeTruthy();
  }));
});
