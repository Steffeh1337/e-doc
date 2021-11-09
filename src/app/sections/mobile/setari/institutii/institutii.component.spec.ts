import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutiiComponent } from './institutii.component';

describe('InstitutiiComponent', () => {
  let component: InstitutiiComponent;
  let fixture: ComponentFixture<InstitutiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutiiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
