import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipSesizareComponent } from './tip-sesizare.component';

describe('TipSesizareComponent', () => {
  let component: TipSesizareComponent;
  let fixture: ComponentFixture<TipSesizareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipSesizareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipSesizareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
