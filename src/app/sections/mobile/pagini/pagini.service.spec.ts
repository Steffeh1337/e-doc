import { TestBed } from '@angular/core/testing';

import { PaginiService } from './pagini.service';

describe('PaginiService', () => {
  let service: PaginiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
