import { TestBed, inject } from '@angular/core/testing';

import { GetAdminPasswordService } from './get-admin-password.service';

describe('GetAdminPasswordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAdminPasswordService]
    });
  });

  it('should be created', inject([GetAdminPasswordService], (service: GetAdminPasswordService) => {
    expect(service).toBeTruthy();
  }));
});
