import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilizatoriComponent } from './utilizatori.component';

describe('UtilizatoriComponent', () => {
  let component: UtilizatoriComponent;
  let fixture: ComponentFixture<UtilizatoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilizatoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilizatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
