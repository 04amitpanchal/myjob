import { TestBed, inject } from '@angular/core/testing';

import { AddResponseService } from './add-response.service';

describe('AddResponseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddResponseService]
    });
  });

  it('should be created', inject([AddResponseService], (service: AddResponseService) => {
    expect(service).toBeTruthy();
  }));
});
