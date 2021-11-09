import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamenteInstitutiiComponent } from './departamente-institutii.component';

describe('DepartamenteInstitutiiComponent', () => {
  let component: DepartamenteInstitutiiComponent;
  let fixture: ComponentFixture<DepartamenteInstitutiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamenteInstitutiiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamenteInstitutiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
