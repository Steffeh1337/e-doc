import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabloaneSolicitareComponent } from './sabloane-solicitare.component';

describe('SabloaneSolicitareComponent', () => {
  let component: SabloaneSolicitareComponent;
  let fixture: ComponentFixture<SabloaneSolicitareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabloaneSolicitareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SabloaneSolicitareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
