import { TestBed } from '@angular/core/testing';

import { SabloaneSesizareService } from './sabloane-sesizare.service';

describe('SabloaneSesizareService', () => {
  let service: SabloaneSesizareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SabloaneSesizareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
