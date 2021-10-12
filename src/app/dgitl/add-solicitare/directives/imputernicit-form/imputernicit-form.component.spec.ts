import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImputernicitFormComponent } from './imputernicit-form.component';

describe('ImputernicitFormComponent', () => {
  let component: ImputernicitFormComponent;
  let fixture: ComponentFixture<ImputernicitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImputernicitFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImputernicitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
