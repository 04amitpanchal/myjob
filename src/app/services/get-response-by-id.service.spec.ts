import { TestBed, inject } from '@angular/core/testing';

import { GetResponseByIdService } from './get-response-by-id.service';

describe('GetResponseByIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetResponseByIdService]
    });
  });

  it('should be created', inject([GetResponseByIdService], (service: GetResponseByIdService) => {
    expect(service).toBeTruthy();
  }));
});
