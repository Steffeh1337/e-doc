import { TestBed } from '@angular/core/testing';

import { StatusSolicitareService } from './status-solicitare.service';

describe('StatusSolicitareService', () => {
  let service: StatusSolicitareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusSolicitareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
