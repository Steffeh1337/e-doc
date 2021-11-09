import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoguriComponent } from './loguri.component';

describe('LoguriComponent', () => {
  let component: LoguriComponent;
  let fixture: ComponentFixture<LoguriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoguriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoguriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
