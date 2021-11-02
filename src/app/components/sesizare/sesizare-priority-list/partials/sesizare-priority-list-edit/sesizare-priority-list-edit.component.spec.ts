import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesizarePriorityListEditComponent } from './sesizare-priority-list-edit.component';

describe('SesizarePriorityListEditComponent', () => {
  let component: SesizarePriorityListEditComponent;
  let fixture: ComponentFixture<SesizarePriorityListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesizarePriorityListEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesizarePriorityListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
