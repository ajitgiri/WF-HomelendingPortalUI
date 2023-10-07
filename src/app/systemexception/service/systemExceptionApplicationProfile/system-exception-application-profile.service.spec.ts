import { TestBed } from '@angular/core/testing';

import { SystemExceptionApplicationProfileService } from './system-exception-application-profile.service';

describe('SystemExceptionApplicationProfileService', () => {
  let service: SystemExceptionApplicationProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemExceptionApplicationProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
