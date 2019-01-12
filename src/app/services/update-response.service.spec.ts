import { TestBed, inject } from '@angular/core/testing';

import { UpdateResponseService } from './update-response.service';

describe('UpdateResponseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateResponseService]
    });
  });

  it('should be created', inject([UpdateResponseService], (service: UpdateResponseService) => {
    expect(service).toBeTruthy();
  }));
});
