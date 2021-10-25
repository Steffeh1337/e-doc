import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesizareTypeListComponent } from './sesizare-type-list.component';

describe('SesizareTypeListComponent', () => {
  let component: SesizareTypeListComponent;
  let fixture: ComponentFixture<SesizareTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesizareTypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesizareTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
