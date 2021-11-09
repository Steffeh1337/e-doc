import { TestBed } from '@angular/core/testing';

import { ArticoleService } from './articole.service';

describe('ArticoleService', () => {
  let service: ArticoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
