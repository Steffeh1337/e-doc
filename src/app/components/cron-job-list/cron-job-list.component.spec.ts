import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronJobListComponent } from './cron-job-list.component';

describe('CronJobListComponent', () => {
  let component: CronJobListComponent;
  let fixture: ComponentFixture<CronJobListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronJobListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CronJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
