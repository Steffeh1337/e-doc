import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabloaneComponent } from './sabloane.component';

describe('SabloaneComponent', () => {
  let component: SabloaneComponent;
  let fixture: ComponentFixture<SabloaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabloaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SabloaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
