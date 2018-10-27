import { TestBed, inject } from '@angular/core/testing';

import { UpdaterecService } from './updaterec.service';

describe('UpdaterecService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdaterecService]
    });
  });

  it('should be created', inject([UpdaterecService], (service: UpdaterecService) => {
    expect(service).toBeTruthy();
  }));
});
