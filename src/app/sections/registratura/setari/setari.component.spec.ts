import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetariComponent } from './setari.component';

describe('SetariComponent', () => {
  let component: SetariComponent;
  let fixture: ComponentFixture<SetariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
