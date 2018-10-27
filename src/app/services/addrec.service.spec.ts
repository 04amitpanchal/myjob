import { TestBed, inject } from '@angular/core/testing';

import { AddrecService } from './addrec.service';

describe('AddrecService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddrecService]
    });
  });

  it('should be created', inject([AddrecService], (service: AddrecService) => {
    expect(service).toBeTruthy();
  }));
});
