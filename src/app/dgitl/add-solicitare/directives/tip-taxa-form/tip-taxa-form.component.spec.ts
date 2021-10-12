import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipTaxaFormComponent } from './tip-taxa-form.component';

describe('TipTaxaFormComponent', () => {
  let component: TipTaxaFormComponent;
  let fixture: ComponentFixture<TipTaxaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipTaxaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipTaxaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
