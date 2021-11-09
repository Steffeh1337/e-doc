import { TestBed } from '@angular/core/testing';

import { InstitutiiService } from './institutii.service';

describe('InstitutiiService', () => {
  let service: InstitutiiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstitutiiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
