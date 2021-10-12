import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiarFormComponent } from './beneficiar-form.component';

describe('BeneficiarFormComponent', () => {
  let component: BeneficiarFormComponent;
  let fixture: ComponentFixture<BeneficiarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiarFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
