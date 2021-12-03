import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabloaneSesizareComponent } from './sabloane-sesizare.component';

describe('SabloaneSesizareComponent', () => {
  let component: SabloaneSesizareComponent;
  let fixture: ComponentFixture<SabloaneSesizareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabloaneSesizareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SabloaneSesizareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
