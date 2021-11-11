import { TestBed } from '@angular/core/testing';

import { SolicitariService } from './solicitari.service';

describe('SolicitariService', () => {
  let service: SolicitariService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitariService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
