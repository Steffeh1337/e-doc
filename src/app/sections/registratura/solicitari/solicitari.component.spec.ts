import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitariComponent } from './solicitari.component';

describe('SolicitariComponent', () => {
  let component: SolicitariComponent;
  let fixture: ComponentFixture<SolicitariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
