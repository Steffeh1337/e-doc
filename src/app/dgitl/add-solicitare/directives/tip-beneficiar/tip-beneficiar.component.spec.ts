import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipBeneficiarComponent } from './tip-beneficiar.component';

describe('TipBeneficiarComponent', () => {
  let component: TipBeneficiarComponent;
  let fixture: ComponentFixture<TipBeneficiarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipBeneficiarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipBeneficiarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
