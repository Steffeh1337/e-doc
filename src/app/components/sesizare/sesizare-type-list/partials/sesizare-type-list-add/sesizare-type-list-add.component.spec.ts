import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesizareTypeListAddComponent } from './sesizare-type-list-add.component';

describe('SesizareTypeListAddComponent', () => {
  let component: SesizareTypeListAddComponent;
  let fixture: ComponentFixture<SesizareTypeListAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesizareTypeListAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesizareTypeListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
