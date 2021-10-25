import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesizarePriorityListComponent } from './sesizare-priority-list.component';

describe('SesizarePriorityListComponent', () => {
  let component: SesizarePriorityListComponent;
  let fixture: ComponentFixture<SesizarePriorityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesizarePriorityListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesizarePriorityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
