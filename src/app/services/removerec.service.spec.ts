import { TestBed, inject } from '@angular/core/testing';

import { RemoverecService } from './removerec.service';

describe('RemoverecService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoverecService]
    });
  });

  it('should be created', inject([RemoverecService], (service: RemoverecService) => {
    expect(service).toBeTruthy();
  }));
});
