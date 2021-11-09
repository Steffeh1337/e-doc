import { TestBed } from '@angular/core/testing';

import { SondajeService } from './sondaje.service';

describe('SondajeService', () => {
  let service: SondajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SondajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
