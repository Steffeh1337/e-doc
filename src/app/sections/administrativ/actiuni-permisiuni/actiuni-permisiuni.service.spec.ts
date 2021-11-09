import { TestBed } from '@angular/core/testing';

import { ActiuniPermisiuniService } from './actiuni-permisiuni.service';

describe('ActiuniPermisiuniService', () => {
  let service: ActiuniPermisiuniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiuniPermisiuniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
