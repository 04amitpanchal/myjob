import { TestBed, inject } from '@angular/core/testing';

import { RemovejobService } from './removejob.service';

describe('RemovejobService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemovejobService]
    });
  });

  it('should be created', inject([RemovejobService], (service: RemovejobService) => {
    expect(service).toBeTruthy();
  }));
});
