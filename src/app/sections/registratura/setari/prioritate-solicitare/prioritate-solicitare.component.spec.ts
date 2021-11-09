import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioritateSolicitareComponent } from './prioritate-solicitare.component';

describe('PrioritateSolicitareComponent', () => {
  let component: PrioritateSolicitareComponent;
  let fixture: ComponentFixture<PrioritateSolicitareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrioritateSolicitareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrioritateSolicitareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
