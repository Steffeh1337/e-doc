import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipScutireComponent } from './tip-scutire.component';

describe('TipScutireComponent', () => {
  let component: TipScutireComponent;
  let fixture: ComponentFixture<TipScutireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipScutireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipScutireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
