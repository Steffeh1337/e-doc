import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSolicitareComponent } from './view-solicitare.component';

describe('ViewSolicitareComponent', () => {
  let component: ViewSolicitareComponent;
  let fixture: ComponentFixture<ViewSolicitareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSolicitareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSolicitareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
