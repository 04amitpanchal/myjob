import { TestBed, inject } from '@angular/core/testing';

import { AddinterviewService } from './addinterview.service';

describe('AddinterviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddinterviewService]
    });
  });

  it('should be created', inject([AddinterviewService], (service: AddinterviewService) => {
    expect(service).toBeTruthy();
  }));
});
