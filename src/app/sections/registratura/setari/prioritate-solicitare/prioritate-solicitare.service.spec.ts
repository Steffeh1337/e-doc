import { TestBed } from '@angular/core/testing';

import { PrioritateSolicitareService } from './prioritate-solicitare.service';

describe('PrioritateSolicitareService', () => {
  let service: PrioritateSolicitareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrioritateSolicitareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
