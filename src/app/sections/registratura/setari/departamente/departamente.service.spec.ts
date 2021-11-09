import { TestBed } from '@angular/core/testing';

import { DepartamenteService } from './departamente.service';

describe('DepartamenteService', () => {
  let service: DepartamenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartamenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
