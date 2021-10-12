import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotarComponent } from './notar.component';

describe('NotarComponent', () => {
  let component: NotarComponent;
  let fixture: ComponentFixture<NotarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
