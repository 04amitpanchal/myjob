import { TestBed, inject } from '@angular/core/testing';

import { RemoveResponseService } from './remove-response.service';

describe('RemoveResponseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoveResponseService]
    });
  });

  it('should be created', inject([RemoveResponseService], (service: RemoveResponseService) => {
    expect(service).toBeTruthy();
  }));
});
