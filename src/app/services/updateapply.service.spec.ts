import { TestBed, inject } from '@angular/core/testing';

import { UpdateapplyService } from './updateapply.service';

describe('UpdateapplyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateapplyService]
    });
  });

  it('should be created', inject([UpdateapplyService], (service: UpdateapplyService) => {
    expect(service).toBeTruthy();
  }));
});
