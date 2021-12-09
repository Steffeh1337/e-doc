import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisiuniComponent } from './permisiuni.component';

describe('PermisiuniComponent', () => {
  let component: PermisiuniComponent;
  let fixture: ComponentFixture<PermisiuniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisiuniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermisiuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
