import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronuriComponent } from './cronuri.component';

describe('CronuriComponent', () => {
  let component: CronuriComponent;
  let fixture: ComponentFixture<CronuriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronuriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CronuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
