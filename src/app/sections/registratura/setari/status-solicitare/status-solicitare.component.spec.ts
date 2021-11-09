import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusSolicitareComponent } from './status-solicitare.component';

describe('StatusSolicitareComponent', () => {
  let component: StatusSolicitareComponent;
  let fixture: ComponentFixture<StatusSolicitareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusSolicitareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusSolicitareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
