import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BileteFormComponent } from './bilete-form.component';

describe('BileteFormComponent', () => {
  let component: BileteFormComponent;
  let fixture: ComponentFixture<BileteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BileteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BileteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
