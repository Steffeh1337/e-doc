import { TestBed } from '@angular/core/testing';

import { SabloaneSolicitareService } from './sabloane-solicitare.service';

describe('SabloaneSolicitareService', () => {
  let service: SabloaneSolicitareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SabloaneSolicitareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
