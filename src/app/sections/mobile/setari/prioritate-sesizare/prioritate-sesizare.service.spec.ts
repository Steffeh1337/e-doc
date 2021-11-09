import { TestBed } from '@angular/core/testing';

import { PrioritateSesizareService } from './prioritate-sesizare.service';

describe('PrioritateSesizareService', () => {
  let service: PrioritateSesizareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrioritateSesizareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
