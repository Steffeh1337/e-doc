import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConturiComponent } from './conturi.component';

describe('ConturiComponent', () => {
  let component: ConturiComponent;
  let fixture: ComponentFixture<ConturiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConturiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConturiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
