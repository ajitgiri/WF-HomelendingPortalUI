import { TestBed } from '@angular/core/testing';

import { ExceptionPipelineService } from './exception-pipeline.service';

describe('ExceptionPipelineService', () => {
  let service: ExceptionPipelineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExceptionPipelineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
