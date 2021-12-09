import { TestBed } from '@angular/core/testing';

import { PermisiuniService } from './permisiuni.service';

describe('PermisiuniService', () => {
  let service: PermisiuniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermisiuniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
