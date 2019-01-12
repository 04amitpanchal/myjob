import { TestBed, inject } from '@angular/core/testing';

import { RemoveinterviewService } from './removeinterview.service';

describe('RemoveinterviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoveinterviewService]
    });
  });

  it('should be created', inject([RemoveinterviewService], (service: RemoveinterviewService) => {
    expect(service).toBeTruthy();
  }));
});
