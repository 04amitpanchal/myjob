import { TestBed, inject } from '@angular/core/testing';

import { AddEducationService } from './add-education.service';

describe('AddEducationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddEducationService]
    });
  });

  it('should be created', inject([AddEducationService], (service: AddEducationService) => {
    expect(service).toBeTruthy();
  }));
});
