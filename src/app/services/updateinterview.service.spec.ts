import { TestBed, inject } from '@angular/core/testing';

import { UpdateinterviewService } from './updateinterview.service';

describe('UpdateinterviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateinterviewService]
    });
  });

  it('should be created', inject([UpdateinterviewService], (service: UpdateinterviewService) => {
    expect(service).toBeTruthy();
  }));
});
