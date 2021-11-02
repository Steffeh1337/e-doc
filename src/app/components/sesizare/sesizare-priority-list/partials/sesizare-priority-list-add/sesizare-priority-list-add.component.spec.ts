import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesizarePriorityListAddComponent } from './sesizare-priority-list-add.component';

describe('SesizarePriorityListAddComponent', () => {
  let component: SesizarePriorityListAddComponent;
  let fixture: ComponentFixture<SesizarePriorityListAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesizarePriorityListAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesizarePriorityListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
