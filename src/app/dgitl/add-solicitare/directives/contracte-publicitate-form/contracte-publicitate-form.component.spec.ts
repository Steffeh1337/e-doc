import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractePublicitateFormComponent } from './contracte-publicitate-form.component';

describe('ContractePublicitateFormComponent', () => {
  let component: ContractePublicitateFormComponent;
  let fixture: ComponentFixture<ContractePublicitateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractePublicitateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractePublicitateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
