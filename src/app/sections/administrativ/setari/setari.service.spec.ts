import { TestBed } from '@angular/core/testing';

import { SetariService } from './setari.service';

describe('SetariService', () => {
  let service: SetariService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetariService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
