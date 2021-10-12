import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSolicitareComponent } from './add-solicitare.component';

describe('AddSolicitareComponent', () => {
  let component: AddSolicitareComponent;
  let fixture: ComponentFixture<AddSolicitareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSolicitareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSolicitareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
