import { TestBed, inject } from '@angular/core/testing';

import { UpdateEducationService } from './update-education.service';

describe('UpdateEducationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateEducationService]
    });
  });

  it('should be created', inject([UpdateEducationService], (service: UpdateEducationService) => {
    expect(service).toBeTruthy();
  }));
});
