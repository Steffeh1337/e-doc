import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSectionContentEditComponent } from './mobile-section-content-edit.component';

describe('MobileSectionContentEditComponent', () => {
  let component: MobileSectionContentEditComponent;
  let fixture: ComponentFixture<MobileSectionContentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileSectionContentEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSectionContentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
