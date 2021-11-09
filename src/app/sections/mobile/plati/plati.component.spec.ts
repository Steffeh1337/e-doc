import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatiComponent } from './plati.component';

describe('PlatiComponent', () => {
  let component: PlatiComponent;
  let fixture: ComponentFixture<PlatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
