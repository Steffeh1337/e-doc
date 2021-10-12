import { TestBed } from '@angular/core/testing';

import { DgitlService } from './dgitl.service';

describe('DgitlService', () => {
  let service: DgitlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DgitlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
