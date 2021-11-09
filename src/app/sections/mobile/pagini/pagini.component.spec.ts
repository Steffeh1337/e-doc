import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginiComponent } from './pagini.component';

describe('PaginiComponent', () => {
  let component: PaginiComponent;
  let fixture: ComponentFixture<PaginiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
