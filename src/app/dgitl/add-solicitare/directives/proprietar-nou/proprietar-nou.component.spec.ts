import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietarNouComponent } from './proprietar-nou.component';

describe('ProprietarNouComponent', () => {
  let component: ProprietarNouComponent;
  let fixture: ComponentFixture<ProprietarNouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProprietarNouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProprietarNouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
