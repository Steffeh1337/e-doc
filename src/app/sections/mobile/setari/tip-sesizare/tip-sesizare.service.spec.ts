import { TestBed } from '@angular/core/testing';

import { TipSesizareService } from './tip-sesizare.service';

describe('TipSesizareService', () => {
  let service: TipSesizareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipSesizareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
