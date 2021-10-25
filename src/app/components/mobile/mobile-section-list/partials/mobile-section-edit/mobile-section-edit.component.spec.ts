import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSectionEditComponent } from './mobile-section-edit.component';

describe('MobileSectionEditComponent', () => {
  let component: MobileSectionEditComponent;
  let fixture: ComponentFixture<MobileSectionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileSectionEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSectionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
