import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleElementComponent } from './simple-element.component';

describe('SimpleElementComponent', () => {
  let component: SimpleElementComponent;
  let fixture: ComponentFixture<SimpleElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
