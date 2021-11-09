import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiuniPermisiuniComponent } from './actiuni-permisiuni.component';

describe('ActiuniPermisiuniComponent', () => {
  let component: ActiuniPermisiuniComponent;
  let fixture: ComponentFixture<ActiuniPermisiuniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiuniPermisiuniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiuniPermisiuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
