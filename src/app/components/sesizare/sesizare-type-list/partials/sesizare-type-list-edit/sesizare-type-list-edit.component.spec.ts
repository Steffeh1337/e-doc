import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesizareTypeListEditComponent } from './sesizare-type-list-edit.component';

describe('SesizareTypeListEditComponent', () => {
  let component: SesizareTypeListEditComponent;
  let fixture: ComponentFixture<SesizareTypeListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesizareTypeListEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesizareTypeListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
