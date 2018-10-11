import { TestBed, inject } from '@angular/core/testing';

import { GetEmpByIdService } from './get-emp-by-id.service';

describe('GetEmpByIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetEmpByIdService]
    });
  });

  it('should be created', inject([GetEmpByIdService], (service: GetEmpByIdService) => {
    expect(service).toBeTruthy();
  }));
});
