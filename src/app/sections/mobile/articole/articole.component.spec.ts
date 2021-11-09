import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticoleComponent } from './articole.component';

describe('ArticoleComponent', () => {
  let component: ArticoleComponent;
  let fixture: ComponentFixture<ArticoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
