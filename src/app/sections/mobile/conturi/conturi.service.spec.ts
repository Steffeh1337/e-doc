import { TestBed } from '@angular/core/testing';

import { ConturiService } from './conturi.service';

describe('ConturiService', () => {
  let service: ConturiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConturiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
