import { TestBed } from '@angular/core/testing';

import { CronuriService } from './cronuri.service';

describe('CronuriService', () => {
  let service: CronuriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CronuriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
