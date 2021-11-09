import { TestBed } from '@angular/core/testing';

import { StatusSesizareService } from './status-sesizare.service';

describe('StatusSesizareService', () => {
  let service: StatusSesizareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusSesizareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
