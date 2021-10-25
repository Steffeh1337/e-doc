import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiiListComponent } from './directii-list.component';

describe('DirectiiListComponent', () => {
  let component: DirectiiListComponent;
  let fixture: ComponentFixture<DirectiiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
