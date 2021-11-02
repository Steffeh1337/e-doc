import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesizareStatusListEditComponent } from './sesizare-status-list-edit.component';

describe('SesizareStatusListEditComponent', () => {
  let component: SesizareStatusListEditComponent;
  let fixture: ComponentFixture<SesizareStatusListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesizareStatusListEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesizareStatusListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
