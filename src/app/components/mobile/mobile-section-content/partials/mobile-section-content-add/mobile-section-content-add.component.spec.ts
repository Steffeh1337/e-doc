import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSectionContentAddComponent } from './mobile-section-content-add.component';

describe('MobileSectionContentAddComponent', () => {
  let component: MobileSectionContentAddComponent;
  let fixture: ComponentFixture<MobileSectionContentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileSectionContentAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSectionContentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
