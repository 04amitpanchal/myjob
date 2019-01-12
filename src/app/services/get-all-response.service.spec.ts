import { TestBed, inject } from '@angular/core/testing';

import { GetAllResponseService } from './get-all-response.service';

describe('GetAllResponseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllResponseService]
    });
  });

  it('should be created', inject([GetAllResponseService], (service: GetAllResponseService) => {
    expect(service).toBeTruthy();
  }));
});
