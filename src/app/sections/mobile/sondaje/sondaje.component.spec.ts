import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SondajeComponent } from './sondaje.component';

describe('SondajeComponent', () => {
  let component: SondajeComponent;
  let fixture: ComponentFixture<SondajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SondajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SondajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
