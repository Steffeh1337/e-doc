import { TestBed } from '@angular/core/testing';

import { TipSolicitareService } from './tip-solicitare.service';

describe('TipSolicitareService', () => {
  let service: TipSolicitareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipSolicitareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
