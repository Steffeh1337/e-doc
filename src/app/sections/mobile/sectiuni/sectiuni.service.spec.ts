import { TestBed } from '@angular/core/testing';

import { SectiuniService } from './sectiuni.service';

describe('SectiuniService', () => {
  let service: SectiuniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectiuniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
