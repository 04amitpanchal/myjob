import { TestBed, inject } from '@angular/core/testing';

import { GetAllEducationService } from './get-all-education.service';

describe('GetAllEducationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllEducationService]
    });
  });

  it('should be created', inject([GetAllEducationService], (service: GetAllEducationService) => {
    expect(service).toBeTruthy();
  }));
});
