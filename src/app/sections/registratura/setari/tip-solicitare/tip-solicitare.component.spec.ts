import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipSolicitareComponent } from './tip-solicitare.component';

describe('TipSolicitareComponent', () => {
  let component: TipSolicitareComponent;
  let fixture: ComponentFixture<TipSolicitareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipSolicitareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipSolicitareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
