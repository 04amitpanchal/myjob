import { TestBed, inject } from '@angular/core/testing';

import { RemoveapplyService } from './removeapply.service';

describe('RemoveapplyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoveapplyService]
    });
  });

  it('should be created', inject([RemoveapplyService], (service: RemoveapplyService) => {
    expect(service).toBeTruthy();
  }));
});
