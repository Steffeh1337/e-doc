import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativComponent } from './administrativ.component';

describe('AdministrativComponent', () => {
  let component: AdministrativComponent;
  let fixture: ComponentFixture<AdministrativComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrativComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
