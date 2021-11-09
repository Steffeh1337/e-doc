import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioritateSesizareComponent } from './prioritate-sesizare.component';

describe('PrioritateSesizareComponent', () => {
  let component: PrioritateSesizareComponent;
  let fixture: ComponentFixture<PrioritateSesizareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrioritateSesizareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrioritateSesizareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
