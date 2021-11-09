import { TestBed } from '@angular/core/testing';

import { LoguriService } from './loguri.service';

describe('LoguriService', () => {
  let service: LoguriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoguriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
