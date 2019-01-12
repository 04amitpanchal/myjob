import { TestBed, inject } from '@angular/core/testing';

import { GetEduByEducationIdService } from './get-edu-by-education-id.service';

describe('GetEduByEducationIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetEduByEducationIdService]
    });
  });

  it('should be created', inject([GetEduByEducationIdService], (service: GetEduByEducationIdService) => {
    expect(service).toBeTruthy();
  }));
});
