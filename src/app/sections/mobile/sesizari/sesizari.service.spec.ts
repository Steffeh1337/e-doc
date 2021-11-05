import { TestBed } from '@angular/core/testing';

import { SesizariService } from './sesizari.service';

describe('SesizariService', () => {
  let service: SesizariService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SesizariService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
