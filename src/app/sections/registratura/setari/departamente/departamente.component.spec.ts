import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamenteComponent } from './departamente.component';

describe('DepartamenteComponent', () => {
  let component: DepartamenteComponent;
  let fixture: ComponentFixture<DepartamenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
