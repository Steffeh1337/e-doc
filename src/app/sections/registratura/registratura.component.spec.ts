import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraturaComponent } from './registratura.component';

describe('RegistraturaComponent', () => {
  let component: RegistraturaComponent;
  let fixture: ComponentFixture<RegistraturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
