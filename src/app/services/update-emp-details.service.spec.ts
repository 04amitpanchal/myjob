import { TestBed, inject } from '@angular/core/testing';

import { UpdateEmpDetailsService } from './update-emp-details.service';

describe('UpdateEmpDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateEmpDetailsService]
    });
  });

  it('should be created', inject([UpdateEmpDetailsService], (service: UpdateEmpDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
