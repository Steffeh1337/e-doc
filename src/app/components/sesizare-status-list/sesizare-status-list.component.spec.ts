import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesizareStatusListComponent } from './sesizare-status-list.component';

describe('SesizareStatusListComponent', () => {
  let component: SesizareStatusListComponent;
  let fixture: ComponentFixture<SesizareStatusListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesizareStatusListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesizareStatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
