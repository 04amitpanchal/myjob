import { TestBed, inject } from '@angular/core/testing';

import { GetAllEmplyeeService } from './get-all-emplyee.service';

describe('GetAllEmplyeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllEmplyeeService]
    });
  });

  it('should be created', inject([GetAllEmplyeeService], (service: GetAllEmplyeeService) => {
    expect(service).toBeTruthy();
  }));
});
