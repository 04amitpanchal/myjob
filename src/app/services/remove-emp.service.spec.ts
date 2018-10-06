import { TestBed, inject } from '@angular/core/testing';

import { RemoveEmpService } from './remove-emp.service';

describe('RemoveEmpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoveEmpService]
    });
  });

  it('should be created', inject([RemoveEmpService], (service: RemoveEmpService) => {
    expect(service).toBeTruthy();
  }));
});
