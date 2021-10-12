import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfGenerateComponent } from './cf-generate.component';

describe('CfGenerateComponent', () => {
  let component: CfGenerateComponent;
  let fixture: ComponentFixture<CfGenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfGenerateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CfGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
