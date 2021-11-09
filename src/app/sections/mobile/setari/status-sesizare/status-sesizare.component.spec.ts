import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusSesizareComponent } from './status-sesizare.component';

describe('StatusSesizareComponent', () => {
  let component: StatusSesizareComponent;
  let fixture: ComponentFixture<StatusSesizareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusSesizareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusSesizareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
