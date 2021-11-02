import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesizareStatusListAddComponent } from './sesizare-status-list-add.component';

describe('SesizareStatusListAddComponent', () => {
  let component: SesizareStatusListAddComponent;
  let fixture: ComponentFixture<SesizareStatusListAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesizareStatusListAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesizareStatusListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
