import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McGunoiComponent } from './mc-gunoi.component';

describe('McGunoiComponent', () => {
  let component: McGunoiComponent;
  let fixture: ComponentFixture<McGunoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McGunoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McGunoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
