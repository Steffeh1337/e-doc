import { TestBed } from '@angular/core/testing';

import { PlatiService } from './plati.service';

describe('PlatiService', () => {
  let service: PlatiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
