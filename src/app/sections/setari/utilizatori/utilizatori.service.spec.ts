import { TestBed } from '@angular/core/testing';

import { UtilizatoriService } from './utilizatori.service';

describe('UtilizatoriService', () => {
  let service: UtilizatoriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilizatoriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
