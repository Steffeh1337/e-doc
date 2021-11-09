import { TestBed } from '@angular/core/testing';

import { SabloaneService } from './sabloane.service';

describe('SabloaneService', () => {
  let service: SabloaneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SabloaneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
