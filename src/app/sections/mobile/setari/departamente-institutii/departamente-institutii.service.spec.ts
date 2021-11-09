import { TestBed } from '@angular/core/testing';

import { DepartamenteInstitutiiService } from './departamente-institutii.service';

describe('DepartamenteInstitutiiService', () => {
  let service: DepartamenteInstitutiiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartamenteInstitutiiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
