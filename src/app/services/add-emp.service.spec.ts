import { TestBed, inject } from '@angular/core/testing';

import { AddEmpService } from './add-emp.service';

describe('AddEmpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddEmpService]
    });
  });

  it('should be created', inject([AddEmpService], (service: AddEmpService) => {
    expect(service).toBeTruthy();
  }));
});
