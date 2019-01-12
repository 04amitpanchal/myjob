import { TestBed, inject } from '@angular/core/testing';

import { AddapplyService } from './addapply.service';

describe('AddapplyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddapplyService]
    });
  });

  it('should be created', inject([AddapplyService], (service: AddapplyService) => {
    expect(service).toBeTruthy();
  }));
});
